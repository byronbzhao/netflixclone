import React from 'react';
import OptForm from '../components/OptForm/OptForm';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/JumbotronContainer';
import Feature from '../components/Feature/Feature';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at anytime.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder='Email Address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership!
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
