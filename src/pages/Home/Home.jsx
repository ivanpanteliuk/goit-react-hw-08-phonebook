import { Section } from 'components/App/App.styled';
import { HeroContainer, HeroSubText, HeroText } from './Home.styled';

export default function Home() {
  return (
    <Section>
      <HeroContainer>
        <HeroText>Organize Your Contacts with Ease</HeroText>
        <HeroSubText>
          Welcome to PhoneBook, the ultimate solution for managing your contacts
          effortlessly. Say goodbye to scattered phone numbers, messy address
          books, and forgotten contacts. With PhoneBook, you can centralize and
          streamline all your contacts in one place.
        </HeroSubText>
      </HeroContainer>
    </Section>
  );
}
