import mongoPict from '../assets/mongo.png';
import reactPict from '../assets/react.svg';
import expressPict from '../assets/express.png';
import nodePict from '../assets/node.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const content = [
    { 
        img: mongoPict,
        alt: 'mongoDB'
    },
    { 
        img: reactPict,
        alt: 'reactJS'
    },
    { 
        img: expressPict,
        alt: 'expressJS'
    },
    { 
        img: nodePict,
        alt: 'nodeJS'
    }
];

export default function Stack() {
    return(
        <div className="pt-20 min-h-screen flex items-center justify-center flex-col bg-white">
            <h1 className='text-5xl font-bold mb-10'>Stack I Use</h1>
            <div>
                <div className='flex flex-wrap justify-center'>
                {content.map((content, index) => (
                    <span
                        key={index}
                        className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${index !== false ? 'animate-bounce' : ''}`}
                    >
                        <LazyLoadImage effect="blur" src={content.img} alt={content.alt} />
                    </span>
                ))}
                </div>
            </div>
            <p className='mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla accusamus voluptatum debitis recusandae quasi laborum doloribus porro unde minus, eos, fugiat magni saepe repudiandae voluptates obcaecati enim. Assumenda, a sequi.
            </p>
        </div>
    )
}