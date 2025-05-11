import Hero from '../components/hero';
import homeImg from 'public/home1.jpg';

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt='ronaldo' title='realmadrid' />
  );
}
