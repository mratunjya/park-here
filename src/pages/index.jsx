import CommonHead from '@common/CommonHead';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.isReady && router.push('/sign-up/user');
  }, [router]);

  return <CommonHead />;
};

export default Home;
