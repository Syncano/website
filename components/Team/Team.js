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
              title="CEO"
            />
            <TeamMember
              photoSrc={require('./images/maciej-kucharz.jpg')}
              photo2xSrc={require('./images/maciej-kucharz@2x.jpg')}
              photoMediumSrc={require('./images/maciej-kucharz-medium.jpg')}
              photoMedium2xSrc={require('./images/maciej-kucharz-medium@2x.jpg')}
              name="Maciej Kucharz"
              title="Head of Engineering"
            />
            <TeamMember
              photoSrc={require('./images/robert-kopaczewski.jpg')}
              photo2xSrc={require('./images/robert-kopaczewski@2x.jpg')}
              photoMediumSrc={require('./images/robert-kopaczewski-medium.jpg')}
              photoMedium2xSrc={require('./images/robert-kopaczewski-medium@2x.jpg')}
              name="Robert Kopaczewski"
              title="Chief Platform Architect"
            />
            <TeamMember
              photoSrc={require('./images/jakub-bilko.jpg')}
              photo2xSrc={require('./images/jakub-bilko@2x.jpg')}
              photoMediumSrc={require('./images/jakub-bilko-medium.jpg')}
              photoMedium2xSrc={require('./images/jakub-bilko-medium@2x.jpg')}
              name="Jakub Bilko"
              title="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/marcin-godlewski.jpg')}
              photo2xSrc={require('./images/marcin-godlewski@2x.jpg')}
              photoMediumSrc={require('./images/marcin-godlewski-medium.jpg')}
              photoMedium2xSrc={require('./images/marcin-godlewski-medium@2x.jpg')}
              name="Marcin Godlewski"
              title="Software Tester"
            />
            <TeamMember
              photoSrc={require('./images/michal-kobus.jpg')}
              photo2xSrc={require('./images/michal-kobus@2x.jpg')}
              photoMediumSrc={require('./images/michal-kobus-medium.jpg')}
              photoMedium2xSrc={require('./images/michal-kobus-medium@2x.jpg')}
              name="Michał Kobus"
              title="DevOps Engineer"
            />
            <TeamMember
              photoSrc={require('./images/patryk-kopycinski.jpg')}
              photo2xSrc={require('./images/patryk-kopycinski@2x.jpg')}
              photoMediumSrc={require('./images/patryk-kopycinski-medium.jpg')}
              photoMedium2xSrc={require('./images/patryk-kopycinski-medium@2x.jpg')}
              name="Patryk Kopyciński"
              title="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/jan-lipmann.jpg')}
              photo2xSrc={require('./images/jan-lipmann@2x.jpg')}
              photoMediumSrc={require('./images/jan-lipmann-medium.jpg')}
              photoMedium2xSrc={require('./images/jan-lipmann-medium@2x.jpg')}
              name="Jan Lipmann"
              title="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/joanna-luma.jpg')}
              photo2xSrc={require('./images/joanna-luma@2x.jpg')}
              photoMediumSrc={require('./images/joanna-luma-medium.jpg')}
              photoMedium2xSrc={require('./images/joanna-luma-medium@2x.jpg')}
              name="Joanna Luma"
              title="CEO Assistant"
            />
            <TeamMember
              photoSrc={require('./images/sebastian-opalczynski.jpg')}
              photo2xSrc={require('./images/sebastian-opalczynski@2x.jpg')}
              photoMediumSrc={require('./images/sebastian-opalczynski-medium.jpg')}
              photoMedium2xSrc={require('./images/sebastian-opalczynski-medium@2x.jpg')}
              name="Sebastian Opałczyński"
              title="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/wojciech-pasinski.jpg')}
              photo2xSrc={require('./images/wojciech-pasinski@2x.jpg')}
              photoMediumSrc={require('./images/wojciech-pasinski-medium.jpg')}
              photoMedium2xSrc={require('./images/wojciech-pasinski-medium@2x.jpg')}
              name="Wojciech Pasiński"
              title="Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/andrej-shevchenko.jpg')}
              photo2xSrc={require('./images/andrej-shevchenko@2x.jpg')}
              photoMediumSrc={require('./images/andrej-shevchenko-medium.jpg')}
              photoMedium2xSrc={require('./images/andrej-shevchenko-medium@2x.jpg')}
              name="Andrej Shevchenko"
              title="Product Marketing"
            />
            <TeamMember
              photoSrc={require('./images/devin-visslailli.jpg')}
              photo2xSrc={require('./images/devin-visslailli@2x.jpg')}
              photoMediumSrc={require('./images/devin-visslailli-medium.jpg')}
              photoMedium2xSrc={require('./images/devin-visslailli-medium@2x.jpg')}
              name="Devin Visslailli"
              title="Developer Evangelist"
            />
            <TeamMember
              photoSrc={require('./images/todd-wacker.jpg')}
              photo2xSrc={require('./images/todd-wacker@2x.jpg')}
              photoMediumSrc={require('./images/todd-wacker-medium.jpg')}
              photoMedium2xSrc={require('./images/todd-wacker-medium@2x.jpg')}
              name="Todd Wacker"
              title="Developer Evangelist"
            />
            <TeamMember
              photoSrc={require('./images/adam-wardecki.jpg')}
              photo2xSrc={require('./images/adam-wardecki@2x.jpg')}
              photoMediumSrc={require('./images/adam-wardecki-medium.jpg')}
              photoMedium2xSrc={require('./images/adam-wardecki-medium@2x.jpg')}
              name="Adam Wardecki"
              title="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/hubert-wesolowski.jpg')}
              photo2xSrc={require('./images/hubert-wesolowski@2x.jpg')}
              photoMediumSrc={require('./images/hubert-wesolowski-medium.jpg')}
              photoMedium2xSrc={require('./images/hubert-wesolowski-medium@2x.jpg')}
              name="Hubert Wesołowski"
              title="Junior Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/mariusz-wisniewski.jpg')}
              photo2xSrc={require('./images/mariusz-wisniewski@2x.jpg')}
              photoMediumSrc={require('./images/mariusz-wisniewski-medium.jpg')}
              photoMedium2xSrc={require('./images/mariusz-wisniewski-medium@2x.jpg')}
              name="Mariusz Wiśniewski"
              title="Software Engineer"
            />
            <TeamMember
              photoSrc={require('./images/piotr-owerczuk.jpg')}
              photo2xSrc={require('./images/piotr-owerczuk@2x.jpg')}
              photoMediumSrc={require('./images/piotr-owerczuk-medium.jpg')}
              photoMedium2xSrc={require('./images/piotr-owerczuk-medium@2x.jpg')}
              name="Piotr Owerczuk"
              title="Junior Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/daniel-siwek.jpg')}
              photo2xSrc={require('./images/daniel-siwek@2x.jpg')}
              photoMediumSrc={require('./images/daniel-siwek-medium.jpg')}
              photoMedium2xSrc={require('./images/daniel-siwek-medium@2x.jpg')}
              name="Daniel Siwek"
              title="Junior Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/tomek-ciecierski.jpg')}
              photo2xSrc={require('./images/tomek-ciecierski@2x.jpg')}
              photoMediumSrc={require('./images/tomek-ciecierski-medium.jpg')}
              photoMedium2xSrc={require('./images/tomek-ciecierski-medium@2x.jpg')}
              name="Tomek Ciecierski"
              title="Junior Front End Engineer"
            />
            <TeamMember
              photoSrc={require('./images/pedro-fasting.jpg')}
              photo2xSrc={require('./images/pedro-fasting@2x.jpg')}
              photoMediumSrc={require('./images/pedro-fasting-medium.jpg')}
              photoMedium2xSrc={require('./images/pedro-fasting-medium@2x.jpg')}
              name="Pedro Fasting"
              title="Chairman of the Board"
            />
            <TeamMember
              photoSrc={require('./images/harald-lervik.jpg')}
              photo2xSrc={require('./images/harald-lervik@2x.jpg')}
              photoMediumSrc={require('./images/harald-lervik-medium.jpg')}
              photoMedium2xSrc={require('./images/harald-lervik-medium@2x.jpg')}
              name="Harald Lervik"
              title="Board Member"
            />
            <TeamMember
              photoSrc={require('./images/jeff-driskill.jpg')}
              photo2xSrc={require('./images/jeff-driskill@2x.jpg')}
              photoMediumSrc={require('./images/jeff-driskill-medium.jpg')}
              photoMedium2xSrc={require('./images/jeff-driskill-medium@2x.jpg')}
              name="Jeff Driskill"
              title="CFO"
            />
            <TeamMember
              photoSrc={require('./images/teodor-bjerrang.jpg')}
              photo2xSrc={require('./images/teodor-bjerrang@2x.jpg')}
              photoMediumSrc={require('./images/teodor-bjerrang-medium.jpg')}
              photoMedium2xSrc={require('./images/teodor-bjerrang-medium@2x.jpg')}
              name="Teodor Bjerrang"
              title="Board Member"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
