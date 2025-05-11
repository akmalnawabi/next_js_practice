import scaleImg from 'public/boy.jpg';
import Hero from '../../components/hero';

export default function scalePage() {
    return (
        <Hero imgData={scaleImg} imgAlt='ronaldo' title='beckham' />
    )
}