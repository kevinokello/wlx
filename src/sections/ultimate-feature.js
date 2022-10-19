/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Ultimate Form Integration",
    description: `To provide the best website development service we integrate Inquiry forms that generate leads & help get their queries answered and contact them in future.`,
  },
  {
    id: 2,
    icon: icon2,
    title: "website optimization",
    description: `By optimizing your website, you can not only tap into an untapped market in the most effective and efficient manner (without paying for advertising) but open doors to more conversions and revenue gains. `,
  },
  {
    id: 3,
    icon: icon3,
    title: "Secure Payment Integration",
    description: `With the rise in use of mobile payment in Kenya and Globally, businesses are scrambling to put their houses in order just to keep up with the fast technological pace and the adaption of online payments.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Why We’re the Best for you?"
          title="We can take a start-up business with nothing to a fully functioning brand online and offline."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: 'relative',
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, null, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
