import React from 'react';
import TeamMember from './TeamMember';

export default ({ headline, children }) => {
  return (
    <div className="team">
      <div className="inner">
        <h2>{headline}</h2>
        <div className="team__list">
          <ul>
            <TeamMember
              photoSrc={require('./images/nikolai-fasting.jpg')}
              photo2xSrc={require('./images/nikolai-fasting@2x.jpg')}
              photoMediumSrc={require('./images/nikolai-fasting-medium.jpg')}
              photoMedium2xSrc={require('./images/nikolai-fasting-medium@2x.jpg')}
              name="Nikolai Fasting"
              position="CEO"
            />
            <TeamMember
              photoSrc={require('./images/maciej-kucharz.jpg')}
              photo2xSrc={require('./images/maciej-kucharz@2x.jpg')}
              photoMediumSrc={require('./images/maciej-kucharz-medium.jpg')}
              photoMedium2xSrc={require('./images/maciej-kucharz-medium@2x.jpg')}
              name="Maciej Kucharz"
              position="Head of Engineering"
            />
            <TeamMember
              photoSrc={require('./images/robert-kopaczewski.jpg')}
              photo2xSrc={require('./images/robert-kopaczewski@2x.jpg')}
              photoMediumSrc={require('./images/robert-kopaczewski-medium.jpg')}
              photoMedium2xSrc={require('./images/robert-kopaczewski-medium@2x.jpg')}
              name="Robert Kopaczewski"
              position="Chief Platform Architect"
            />
            <TeamMember
              photoSrc={require('./images/kelly-andrews.jpg')}
              photo2xSrc={require('./images/kelly-andrews@2x.jpg')}
              photoMediumSrc={require('./images/kelly-andrews-medium.jpg')}
              photoMedium2xSrc={require('./images/kelly-andrews-medium@2x.jpg')}
              name="Kelly Andrews"
              position="Principal Developer Evangelist"
            />
            <TeamMember
              photoSrc={require('./images/mary-fabro.jpg')}
              photo2xSrc={require('./images/mary-fabro@2x.jpg')}
              photoMediumSrc={require('./images/mary-fabro-medium.jpg')}
              photoMedium2xSrc={require('./images/mary-fabro-medium@2x.jpg')}
              name="Mary Fabro"
              position="Head of Customer Growth"
            />
            <TeamMember
              photoSrc={require('./images/sara-cowie.jpg')}
              photo2xSrc={require('./images/sara-cowie@2x.jpg')}
              photoMediumSrc={require('./images/sara-cowie-medium.jpg')}
              photoMedium2xSrc={require('./images/sara-cowie-medium@2x.jpg')}
              name="Sara Cowie"
              position="Customer Growth"
            />
            <TeamMember
              photoSrc={require('./images/dawid-dapszus.jpg')}
              photo2xSrc={require('./images/dawid-dapszus@2x.jpg')}
              photoMediumSrc={require('./images/dawid-dapszus-medium.jpg')}
              photoMedium2xSrc={require('./images/dawid-dapszus-medium@2x.jpg')}
              name="Dawid Dapszus"
              position="Product Designer"
            />
            <TeamMember
              photoSrc={require('./images/jakub-bilko.jpg')}
              photo2xSrc={require('./images/jakub-bilko@2x.jpg')}
              photoMediumSrc={require('./images/jakub-bilko-medium.jpg')}
              photoMedium2xSrc={require('./images/jakub-bilko-medium@2x.jpg')}
              name="Jakub Bilko"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/marcin-godlewski.jpg')}
              photo2xSrc={require('./images/marcin-godlewski@2x.jpg')}
              photoMediumSrc={require('./images/marcin-godlewski-medium.jpg')}
              photoMedium2xSrc={require('./images/marcin-godlewski-medium@2x.jpg')}
              name="Marcin Godlewski"
              position="Software Tester"
            />
            <TeamMember
              photoSrc={require('./images/michal-kobus.jpg')}
              photo2xSrc={require('./images/michal-kobus@2x.jpg')}
              photoMediumSrc={require('./images/michal-kobus-medium.jpg')}
              photoMedium2xSrc={require('./images/michal-kobus-medium@2x.jpg')}
              name="Michał Kobus"
              position="DevOps Engineer"
            />
            <TeamMember
              photoSrc={require('./images/daniel-kopka.jpg')}
              photo2xSrc={require('./images/daniel-kopka@2x.jpg')}
              photoMediumSrc={require('./images/daniel-kopka-medium.jpg')}
              photoMedium2xSrc={require('./images/daniel-kopka-medium@2x.jpg')}
              name="Daniel Kopka"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/patryk-kopycinski.jpg')}
              photo2xSrc={require('./images/patryk-kopycinski@2x.jpg')}
              photoMediumSrc={require('./images/patryk-kopycinski-medium.jpg')}
              photoMedium2xSrc={require('./images/patryk-kopycinski-medium@2x.jpg')}
              name="Patryk Kopyciński"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/jan-lipmann.jpg')}
              photo2xSrc={require('./images/jan-lipmann@2x.jpg')}
              photoMediumSrc={require('./images/jan-lipmann-medium.jpg')}
              photoMedium2xSrc={require('./images/jan-lipmann-medium@2x.jpg')}
              name="Jan Lipmann"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/joanna-luma.jpg')}
              photo2xSrc={require('./images/joanna-luma@2x.jpg')}
              photoMediumSrc={require('./images/joanna-luma-medium.jpg')}
              photoMedium2xSrc={require('./images/joanna-luma-medium@2x.jpg')}
              name="Joanna Luma"
              position="CEO Assistant"
            />
            <TeamMember
              photoSrc={require('./images/sebastian-opalczynski.jpg')}
              photo2xSrc={require('./images/sebastian-opalczynski@2x.jpg')}
              photoMediumSrc={require('./images/sebastian-opalczynski-medium.jpg')}
              photoMedium2xSrc={require('./images/sebastian-opalczynski-medium@2x.jpg')}
              name="Sebastian Opałczyński"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/wojciech-pasinski.jpg')}
              photo2xSrc={require('./images/wojciech-pasinski@2x.jpg')}
              photoMediumSrc={require('./images/wojciech-pasinski-medium.jpg')}
              photoMedium2xSrc={require('./images/wojciech-pasinski-medium@2x.jpg')}
              name="Wojciech Pasiński"
              position="Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/andrej-shevchenko.jpg')}
              photo2xSrc={require('./images/andrej-shevchenko@2x.jpg')}
              photoMediumSrc={require('./images/andrej-shevchenko-medium.jpg')}
              photoMedium2xSrc={require('./images/andrej-shevchenko-medium@2x.jpg')}
              name="Andrej Shevchenko"
              position="UX &amp; Marketing"
            />
            <TeamMember
              photoSrc={require('./images/marcin-swiderski.jpg')}
              photo2xSrc={require('./images/marcin-swiderski@2x.jpg')}
              photoMediumSrc={require('./images/marcin-swiderski-medium.jpg')}
              photoMedium2xSrc={require('./images/marcin-swiderski-medium@2x.jpg')}
              name="Marcin Swiderski"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/devin-visslailli.jpg')}
              photo2xSrc={require('./images/devin-visslailli@2x.jpg')}
              photoMediumSrc={require('./images/devin-visslailli-medium.jpg')}
              photoMedium2xSrc={require('./images/devin-visslailli-medium@2x.jpg')}
              name="Devin Visslailli"
              position="Developer Evangelist"
            />
            <TeamMember
              photoSrc={require('./images/todd-wacker.jpg')}
              photo2xSrc={require('./images/todd-wacker@2x.jpg')}
              photoMediumSrc={require('./images/todd-wacker-medium.jpg')}
              photoMedium2xSrc={require('./images/todd-wacker-medium@2x.jpg')}
              name="Todd Wacker"
              position="Developer Evangelist"
            />
            <TeamMember
              photoSrc={require('./images/adam-wardecki.jpg')}
              photo2xSrc={require('./images/adam-wardecki@2x.jpg')}
              photoMediumSrc={require('./images/adam-wardecki-medium.jpg')}
              photoMedium2xSrc={require('./images/adam-wardecki-medium@2x.jpg')}
              name="Adam Wardecki"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/hubert-wesolowski.jpg')}
              photo2xSrc={require('./images/hubert-wesolowski@2x.jpg')}
              photoMediumSrc={require('./images/hubert-wesolowski-medium.jpg')}
              photoMedium2xSrc={require('./images/hubert-wesolowski-medium@2x.jpg')}
              name="Hubert Wesołowski"
              position="Junior Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/mariusz-wisniewski.jpg')}
              photo2xSrc={require('./images/mariusz-wisniewski@2x.jpg')}
              photoMediumSrc={require('./images/mariusz-wisniewski-medium.jpg')}
              photoMedium2xSrc={require('./images/mariusz-wisniewski-medium@2x.jpg')}
              name="Mariusz Wiśniewski"
              position="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/pedro-fasting.jpg')}
              photo2xSrc={require('./images/pedro-fasting@2x.jpg')}
              photoMediumSrc={require('./images/pedro-fasting-medium.jpg')}
              photoMedium2xSrc={require('./images/pedro-fasting-medium@2x.jpg')}
              name="Pedro Fasting"
              position="Chairman of the Board"
            />
            <TeamMember
              photoSrc={require('./images/harald-lervik.jpg')}
              photo2xSrc={require('./images/harald-lervik@2x.jpg')}
              photoMediumSrc={require('./images/harald-lervik-medium.jpg')}
              photoMedium2xSrc={require('./images/harald-lervik-medium@2x.jpg')}
              name="Harald Lervik"
              position="Board Member"
            />
            <TeamMember
              photoSrc={require('./images/jeff-driskill.jpg')}
              photo2xSrc={require('./images/jeff-driskill@2x.jpg')}
              photoMediumSrc={require('./images/jeff-driskill-medium.jpg')}
              photoMedium2xSrc={require('./images/jeff-driskill-medium@2x.jpg')}
              name="Jeff Driskill"
              position="CFO"
            />
            <TeamMember
              photoSrc={require('./images/teodor-bjerrang.jpg')}
              photo2xSrc={require('./images/teodor-bjerrang@2x.jpg')}
              photoMediumSrc={require('./images/teodor-bjerrang-medium.jpg')}
              photoMedium2xSrc={require('./images/teodor-bjerrang-medium@2x.jpg')}
              name="Teodor Bjerrang"
              position="Board Member"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
