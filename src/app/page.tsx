import Hero from '../components/hero';
import homeImg from 'public/home.jpg';

export default async function Home() {

  return (
    <div>
      <Hero imgData={homeImg} imgAlt='ronaldo' title='realmadrid' />
    </div>
  );
}
