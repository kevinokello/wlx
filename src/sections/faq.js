/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Masonry from "react-masonry-component";
import SectionHeading from "components/section-heading";
import faqItem from "components/cards/faq-item";

const data = [
  {
    id: 1,
    ques: "1. Requirement Gathering?",
    ans: `This is our very first step in designing your effective website. We gather requirements and analyze these requirements based on your company goals, target audience and objectives.`,
  },
  {
    id: 2,
    ques: "2. Creating a Workflow",
    ans: `The key to a successful website design is planning. Before we start any project we listen to the goals you are trying to achieve and gain an understanding of your business so that we can visualise it within the design process.`,
  },
  {
    id: 3,
    ques: "3. Prototype $ Mockup",
    ans: `Once the visual design for high-fidelity wireframe receives a green signal from the client, it is time to develop visual mockups! Mockups give the visual representation of the planned design of the site.`,
  },
  {
    id: 4,
    ques: "4. Development",
    ans: `This part of the design process will often be shapedd by existing branding elements, colour choices, and logos, as stipulated by the you.`,
  },
  {
    id: 5,
    ques: "5. Deployment",
    ans: `Now it’s time for everyone’s favorite part of the website design process: When everything has been thoroughly tested, and you’re happy with the site, it’s time to launch.`,
  },
  {
    id: 6,
    ques: "6. Support & Maintenance",
    ans: `It doesn’t stop there, with ongoing support ensuring your website continues to deliver results. We monitor, review and analyse how successful your website is performing, making sure it is delivering on its core goals.`,
  },
];

const masonryOptions = { originTop: true };

const faq = () => {
  return (
    <Box as="section" id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Get yours question answer"
          title="Frequantly asked question"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <faqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </Box>
  );
};

export default faq;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, null, 10, 6],
  },
  grid: {
    mx: [null, null, null, -6, -8, "unset"],
  },
};
