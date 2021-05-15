/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Opens for Everyone',
    description: `Any one with zeal to get something can be part of our programme to get skilled and get your dream job`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Live Classes',
    description: `Daily Live classes best suit your time until you get the job.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Soft Skills',
    description: `Boost your communication skills to get the best part of your time to get the job`,
  },
  {
    id: 5,
    icon: icon3,
    title: 'Mock Interview',
    description: `Weekly review tests and mock interviews`,
  },
  {
    id: 6,
    icon: icon3,
    title: 'Personal Mentoring',
    description: `Learn from some of the best industry experience professionals in one-on-one session`,
  },
  {
    id: 7,
    icon: icon3,
    title: 'Resume Building',
    description: `To succeed in today's job market, you have to think of your resume as an adevertisement target toward your future boss.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Enhance your Career path with our Guidence"
          description="A place where you can build, learn and grow to get good job your interest.Lets Get Skilled together."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
