import { BsArrowRightCircle } from "react-icons/bs";

import {
  AboutContent,
  AboutDescription,
  AboutImg,
  AbouTitleGroup,
  AboutLearnButton,
  AboutSection,
  AboutSubtitle,
  AboutSubtitleBold,
  AboutTitle,
  CareerButton,
  CareerSection,
  CareerSubTitle,
  CareerTitle,
  ContactContent,
  ContactDescription,
  ContactEmail,
  ContactForm,
  ContactGroup,
  ContactLabel,
  ContactList,
  ContactNumber,
  ContactSection,
  ContactSubtitle,
  ContactTitle,
  ContentWrapper,
  FeatureContent,
  FeatureGroup,
  FeatureIcon,
  FeatureIconGroup,
  FeatureLabel,
  FeatureSection,
  FeatureSubtitle,
  FeatureTitle,
  FindButton,
  FooterWrapper,
  FootTitle,
  FormGroup,
  FormInput,
  FormLabel,
  HomeContent,
  IntroSubtitle,
  IntroTitle,
  LabelGroup,
  LandingSection,
  LinkGroup,
  LinkList,
  LinkTitle,
  SendButton,
  SubTitle,
  Title,
  TitleWrapper,
} from "./style";

import About from "assets/img/about.jpg";

import AccessibleSvg from "assets/svg/accessible.svg";
import AnalysisSvg from "assets/svg/analysis.svg";
import InclusiveSvg from "assets/svg/inclusive.svg";
import SafeSvg from "assets/svg/safe.svg";
import SupportSvg from "assets/svg/support.svg";
import { PATH } from "constant";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export const HomeView: React.FC = () => {
  return (
    <HomeContent>
      <LandingSection id={PATH.LANDING}>
        <LabelGroup>
          <Title>Voting is our life, our future</Title>
          <SubTitle>Your Voice, Your Vote: Building a Better Tomorrow</SubTitle>
        </LabelGroup>
        <FindButton>
          Discover More <BsArrowRightCircle size={16} />
        </FindButton>
      </LandingSection>
      <AboutSection id={PATH.ABOUT}>
        <AboutImg src={About} />
        <AboutContent>
          <AbouTitleGroup>
            <AboutTitle>About Us</AboutTitle>
            <AboutSubtitle>
              <AboutSubtitleBold>A</AboutSubtitleBold>ny Title!
              <br />
              <AboutSubtitleBold>A</AboutSubtitleBold>ny Suggestion!
              <br />
              <AboutSubtitleBold>A</AboutSubtitleBold>nyone!
            </AboutSubtitle>
          </AbouTitleGroup>
          <AboutDescription>
            GP Vote is a revolutionary decentralized voting platform that
            empowers individuals to make collective decisions on various topics.
            Our mission is to democratize decision-making processes by allowing
            anyone to propose titles, answers, or suggestions for global
            consideration. By leveraging blockchain technology, we create a
            transparent and tamper-proof system where the majority opinion
            prevails. Our goal is to foster global perspective and encourage
            participation from all corners of society, ultimately shaping a more
            inclusive and representative future for humanity.
          </AboutDescription>
          <AboutLearnButton>Learn More</AboutLearnButton>
        </AboutContent>
      </AboutSection>
      <FeatureSection id={PATH.PRODUCT}>
        <FeatureContent>
          <FeatureTitle>What we provide</FeatureTitle>
          <FeatureSubtitle>
            Scroll through our various categories and choose which one to vote
            for. Remember every vote counts
          </FeatureSubtitle>
        </FeatureContent>
        <FeatureGroup>
          <FeatureIconGroup>
            <FeatureIcon src={InclusiveSvg} />
            <FeatureLabel>All-inclusive</FeatureLabel>
          </FeatureIconGroup>
          <FeatureIconGroup>
            <FeatureIcon src={AnalysisSvg} />
            <FeatureLabel>Quick Analytics</FeatureLabel>
          </FeatureIconGroup>
          <FeatureIconGroup>
            <FeatureIcon src={SafeSvg} />
            <FeatureLabel>Safe & Secure</FeatureLabel>
          </FeatureIconGroup>
          <FeatureIconGroup>
            <FeatureIcon src={AccessibleSvg} />
            <FeatureLabel>Accessible</FeatureLabel>
          </FeatureIconGroup>
          <FeatureIconGroup>
            <FeatureIcon src={SupportSvg} />
            <FeatureLabel>Full Support</FeatureLabel>
          </FeatureIconGroup>
        </FeatureGroup>
      </FeatureSection>
      <ContactSection id={PATH.CONTACT}>
        <ContactContent>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactSubtitle>Reach out with your enquires</ContactSubtitle>
          <ContactDescription>
            Call us for immediate support to this number
          </ContactDescription>
          <ContactNumber>+1 339 309 3123</ContactNumber>
          <ContactEmail>takeshikask@proton.me</ContactEmail>
        </ContactContent>
        <ContactForm>
          <FormGroup>
            <FormLabel>Name:</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup>
            <FormLabel>Message:</FormLabel>
            <FormInput />
          </FormGroup>
          <SendButton>Send Message</SendButton>
        </ContactForm>
      </ContactSection>
      <CareerSection id={PATH.CAREER}>
        <CareerTitle>Together, We Create Success Stories</CareerTitle>
        <CareerSubTitle>Crafting Achievements Hand in Hand</CareerSubTitle>
        <CareerButton to={PATH.CAREER}>See our open positions</CareerButton>
      </CareerSection>
      <FooterWrapper>
        <TitleWrapper>
          <IntroTitle>GP-Vote</IntroTitle>
          <LinkTitle>Additional Links</LinkTitle>
          <FootTitle>Contact Info</FootTitle>
        </TitleWrapper>
        <ContentWrapper>
          <IntroSubtitle>
            GP Vote is a decentralized online voting platform built on
            blockchain technology that aims to redefine the essence of voting
            itself by offering a secure, transparent, and tamper-proof voting
            system.
          </IntroSubtitle>
          <LinkGroup>
            <LinkList href={`#${PATH.LANDING}`}>Home</LinkList>
            <LinkList href={`#${PATH.ABOUT}`}>About</LinkList>
            <LinkList href={`#${PATH.PRODUCT}`}>Product</LinkList>
            <LinkList href={`#${PATH.CONTACT}`}>Contact</LinkList>
            <LinkList href={`#${PATH.CAREER}`}>Careers</LinkList>
          </LinkGroup>
          <ContactGroup>
            <ContactList>
              <MdEmail />
              <ContactLabel>takeshikask@proton.me</ContactLabel>
            </ContactList>
            <ContactList>
              <FaPhoneVolume />
              <ContactLabel>+1 339 309 3123</ContactLabel>
            </ContactList>
          </ContactGroup>
        </ContentWrapper>
      </FooterWrapper>
    </HomeContent>
  );
};
