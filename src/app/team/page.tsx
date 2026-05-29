import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/imageUrl";
import styles from "@/styles/team.module.scss";

type TeamMember = {
    _id: string;
    name: string;
    role: string;
    bio: string;
    photo: any;
};

async function getTeamMembers(): Promise<TeamMember[]> {
    return client.fetch(`
        *[_type == "teamMembers"] | order(displayOrder asc){
            _id,
            name,
            role,
            bio,
            photo
        }
    `);
}


export default async function TeamPage() {
    const teamMembers = await getTeamMembers();
    console.log(teamMembers);
    return (
        <>
            <Header />

            <main className={styles.teamPage}>
                <section className={styles.pageHero}>
                    <p>Meet the Team</p>
                    <h1>Dedicated care from our expert team</h1>
                    <span>
                        Get to know the passionate professionals behind our veterinary care.
                    </span>
                </section>

                <section className={styles.teamGrid}>
                    {teamMembers.map((member) => (
                        <div className={styles.teamMember} key={member._id}>
                            {member.photo && (
                                <img
                                    src={urlFor(member.photo).width(500).height(500).url()}
                                    alt={member.name}
                                    className={styles.memberPhoto}
                                />
                            )}

                            <h2 className={styles.memberName}>{member.name}</h2>
                            <span className={styles.memberRole}>{member.role}</span>
                            <p className={styles.memberBio}>{member.bio}</p>
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </>
    );
}