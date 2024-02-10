import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import article from './data/article.json';
import statistics from './data/stats.json';
import forbs from './data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard article={article} />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" statistics={statistics} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList forbs={forbs} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
