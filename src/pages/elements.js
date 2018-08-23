import React from 'react';
import {
    H1, H2, H3, H4, H5,
    P,
    A, Button,
    Ol, Ul, Li,
    Strong
} from '../styles/styledComponents/elements';
import Themed from '../helpers/Themed';
import { StyledSection } from '../styles/styledComponents/blocks';

const Elements = () => {
    return (
        <div>
            <StyledSection>
                <H1>H1: Lorem Ipsum</H1>
                <H2>H2: Lorem Ipsum</H2>
                <H3>H3: Lorem Ipsum</H3>
                <H4>H4: Lorem Ipsum</H4>
                <H5>H5: Lorem Ipsum</H5>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis urna magna, eget faucibus nisi viverra eget. Maecenas scelerisque nulla nec metus interdum, ut sollicitudin odio sollicitudin. Donec maximus ligula molestie quam commodo vehicula. Curabitur convallis commodo lectus, eget accumsan odio pellentesque at. Curabitur aliquet magna non ante semper convallis. Curabitur ut risus vel lorem mollis maximus. Cras vehicula enim at ex ornare, ultrices tempor nisi interdum. Sed vulputate vitae velit at mattis. Morbi convallis eget neque et posuere. Fusce egestas enim ac ligula suscipit sollicitudin. Morbi vulputate, justo sed finibus pharetra, odio sem sagittis sem, vitae fermentum libero sem vitae est. Duis in libero id ante faucibus commodo.</P>
                <P>Nunc hendrerit leo sed pharetra sagittis. Curabitur suscipit tellus fringilla nisi tristique euismod. In sem sem, ultricies quis commodo ac, euismod nec lacus. Sed non elementum velit. Phasellus eu enim a sem convallis tincidunt. Duis placerat turpis non ex laoreet varius. Vivamus molestie semper justo ac lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et porta enim, vel lobortis lectus.</P>
                <A>Link</A>
                <Button>Button</Button>
            </StyledSection>
            <Themed dark>
                <StyledSection style={{ background: "black" }}>
                    <H1>H1: Lorem Ipsum</H1>
                    <H2>H2: Lorem Ipsum</H2>
                    <H3>H3: Lorem Ipsum</H3>
                    <H4>H4: Lorem Ipsum</H4>
                    <H5>H5: Lorem Ipsum</H5>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis urna magna, eget faucibus nisi viverra eget. Maecenas scelerisque nulla nec metus interdum, ut sollicitudin odio sollicitudin. Donec maximus ligula molestie quam commodo vehicula. Curabitur convallis commodo lectus, eget accumsan odio pellentesque at. Curabitur aliquet magna non ante semper convallis. Curabitur ut risus vel lorem mollis maximus. Cras vehicula enim at ex ornare, ultrices tempor nisi interdum. Sed vulputate vitae velit at mattis. Morbi convallis eget neque et posuere. Fusce egestas enim ac ligula suscipit sollicitudin. Morbi vulputate, justo sed finibus pharetra, odio sem sagittis sem, vitae fermentum libero sem vitae est. Duis in libero id ante faucibus commodo.</P>
                    <P>Nunc hendrerit leo sed pharetra sagittis. Curabitur suscipit tellus fringilla nisi tristique euismod. In sem sem, ultricies quis commodo ac, euismod nec lacus. Sed non elementum velit. Phasellus eu enim a sem convallis tincidunt. Duis placerat turpis non ex laoreet varius. Vivamus molestie semper justo ac lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et porta enim, vel lobortis lectus.</P>
                    <A>Link</A>
                    <Button>Button</Button>
                </StyledSection>
            </Themed>
        </div>
    )
};

export default Elements;