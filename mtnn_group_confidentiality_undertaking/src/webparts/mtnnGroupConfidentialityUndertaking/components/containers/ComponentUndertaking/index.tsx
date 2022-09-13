import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdPlayArrow } from 'react-icons/md';
import styles from './styles.module.scss';

const ComponentUndertaking = ({ undertakingForm }) => {
  return (
    <div className={styles.undertakingContent}>
        <h5>Group Confidentiality Undertaking</h5>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, assumenda distinctio voluptates ad quod illo odit fugit dolor atque delectus, inventore sit? Impedit, cumque pariatur fugit eos obcaecati a nobis tenetur aperiam illo, saepe voluptas provident praesentium quaerat sit laboriosam facilis possimus repellendus vel ducimus tempore ipsam? Velit cumque eaque laborum dolore! Odit laborum qui architecto, aliquid distinctio sed id, obcaecati dolore earum animi dignissimos eius impedit expedita accusamus? Debitis nostrum tempora aliquid, dolores recusandae blanditiis iusto voluptates praesentium, repellendus a natus! Culpa voluptas, accusamus, eos minima enim ad mollitia magnam obcaecati aspernatur placeat alias laboriosam doloremque eaque, optio fugiat.</p>
        
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aspernatur ex qui unde. Sit optio nobis dignissimos sint aperiam cum maxime pariatur ut id rem ex necessitatibus aliquam illum soluta a nulla, ab reprehenderit delectus est repudiandae. Dicta minima officia voluptatem optio aperiam praesentium veritatis quisquam eius eaque magni ad, beatae nihil facilis earum repellat est illum autem. Illum tenetur, voluptatibus ratione laborum odit qui mollitia nesciunt? Velit, illo! Animi molestiae enim aspernatur consequuntur aut deserunt impedit ex accusamus iusto eum non ipsum numquam dolorem, harum, fugiat sit. Perferendis voluptatem, doloribus minima aliquam voluptatum voluptatibus beatae totam expedita esse sapiente.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium esse adipisci aperiam atque quasi maxime, sapiente porro quod rem obcaecati impedit qui voluptatibus itaque veniam amet ullam nemo ea officiis accusamus, quisquam cumque. Iure, accusamus nesciunt ipsa nobis perspiciatis ab laudantium et iusto. Quasi eaque vitae sunt neque laudantium aut possimus alias minima, amet molestiae quisquam nostrum corporis quo fuga distinctio illo consequuntur cumque mollitia iure sequi eius maiores veritatis hic. Omnis earum culpa eaque adipisci corrupti praesentium ullam eveniet libero obcaecati eum beatae nemo tempora aliquam assumenda iste odio, vitae numquam officiis quo nostrum neque? Corrupti, eaque qui.</p>

        <div className={styles.btn}>
            <span>
                <Link to={undertakingForm}>Next <span><MdPlayArrow /></span></Link>
            </span>
        </div>
    </div>
  );
};

export default ComponentUndertaking;