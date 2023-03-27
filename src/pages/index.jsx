import CommonHead from '@common/CommonHead';

const Home = () => {
  return <CommonHead />;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/sign-up/user',
      permanent: false,
    },
  };
}

export default Home;
