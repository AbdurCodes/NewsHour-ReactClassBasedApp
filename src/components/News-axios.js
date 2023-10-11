import React, { Component } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';



export class News extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    // Fetch data from the API when the component mounts
    // use Axios to make an HTTP GET request to your API
    axios  // also fetch api can be used
      .get('https://newsapi.org/v2/everything?q=osho&from=2023-09-07&sortBy=publishedAt&apiKey=ac0b11c66fbf42b3a0482ef6bb62b17d') // Replace with your API URL
      .then((response) => {
        this.setState({ articles: response.data.articles }); // Update the articles state with the fetched data
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }



  render() {

    // let articles = [
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Ingrid Lunden",
    //   "title": "Unitary AI picks up $15M for its multimodal approach to video content moderation | TechCrunch",
    //   "description": "Content moderation continues to be a contentious topic in the world of online media. New regulations and public concern are likely to keep it as a",
    //   "url": "https://techcrunch.com/2023/10/02/unitary-ai-picks-up-15m-for-its-multimodal-approach-to-video-content-moderation/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/Screenshot-2023-10-03-at-01.44.37.png?resize=1200,820",
    //   "publishedAt": "2023-10-03T04:59:34Z",
    //   "content": "Content moderation continues to be a contentious topic in the world of online media. New regulations and public concern are likely to keep it as a priority for many years to come. But weaponised AI a… [+6093 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Taylor Hatmaker",
    //   "title": "Elon Musk is being sued for defamation after falsely claiming a man was a neo-Nazi on X | TechCrunch",
    //   "description": "Elon Musk faces a new defamation lawsuit after engaging with a conspiracy theory on X, the platform formerly known as Twitter.",
    //   "url": "https://techcrunch.com/2023/10/02/elon-musk-is-being-sued-for-defamation-after-falsely-claiming-a-man-was-a-neo-nazi-on-x/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1258742140.jpg?resize=1200,800",
    //   "publishedAt": "2023-10-03T02:07:30Z",
    //   "content": "Elon Musk has been on something of a suing spree lately, but on Monday Twitter’s new owner was hit with a fresh inbound lawsuit.\r\nThe lawsuit alleges that Musk defamed a California man after the owne… [+2630 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Rebecca Bellan",
    //   "title": "Tesla Autopilot arbitration win could set legal benchmark in auto industry | TechCrunch",
    //   "description": "In a victory for Tesla, a California federal judge ruled over the weekend that a group of Tesla owners cannot pursue in court claims that the company",
    //   "url": "https://techcrunch.com/2023/10/02/tesla-autopilot-arbitration-win-could-set-legal-benchmark-in-auto-industry/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1494766819.jpg?resize=1200,675",
    //   "publishedAt": "2023-10-02T22:38:26Z",
    //   "content": "In a victory for Tesla, a California federal judge ruled over the weekend that a group of Tesla owners cannot pursue in court claims that the company falsely advertised its automated features. Instea… [+3484 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Morgan Sung",
    //   "title": "Republicans still don't know how to talk to young voters online | TechCrunch",
    //   "description": "Vivek Ramaswamy is only Republican presidential candidate to join TikTok, but he's still struggling to get Gen Z to take him seriously.",
    //   "url": "https://techcrunch.com/2023/10/02/tiktok-republican-social-media-campaign-struggle-vivek-ramaswamy/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/vivek-raps-tiktok.jpg?resize=1200,675",
    //   "publishedAt": "2023-10-02T21:42:14Z",
    //   "content": "In an appeal to younger voters, Republican presidential candidate Vivek Ramaswamy who proposed raising the voting age to 25 launched his TikTok presence with an endorsement from Jake Paul, the YouTub… [+16627 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Kirsten Korosec",
    //   "title": "Ousted Flexport CEO Dave Clark strikes back | TechCrunch",
    //   "description": "Dave Clark, who was ousted as CEO of Flexport just a year into the job, fired back at its founder and board.",
    //   "url": "https://techcrunch.com/2023/10/02/ousted-flexport-ceo-dave-clark-strikes-back/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/dave-clark-ryan-petersen-flexport.jpg?resize=1200,675",
    //   "publishedAt": "2023-10-02T21:26:38Z",
    //   "content": "Dave Clark, the former Amazon executive who was ousted as CEO of Flexport just a year into the job, fired back at its founder and board, calling recent reporting on the logistics company “deeply conc… [+3548 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Mary Ann Azevedo",
    //   "title": "Visa earmarks $100M to invest in generative AI companies | TechCrunch",
    //   "description": "Visa announced today that it plans to invest $100 million in companies developing generative AI technologies and applications “that will impact the future The investments will be made through Visa Ventures, the card giant’s 16-year-old global corporate invest…",
    //   "url": "https://techcrunch.com/2023/10/02/visa-earmarks-100m-to-invest-in-generative-ai-companies/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1365407901.jpg?resize=1200,816",
    //   "publishedAt": "2023-10-02T21:22:33Z",
    //   "content": "Visa announced today that it plans to invest $100 million in companies developing generative AI technologies and applications that will impact the future of commerce and payments.\r\nThe investments wi… [+1232 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Sarah Perez",
    //   "title": "Elon Musk's X Corp faces trademark lawsuit from social media ad agency | TechCrunch",
    //   "description": "When Elon Musk rebranded Twitter to X this summer, there were concerns that the new company could face trademark lawsuits as there were nearly 900 active",
    //   "url": "https://techcrunch.com/2023/10/02/elon-musks-x-corp-faces-trademark-lawsuit-from-social-media-ad-agency/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/twitter-x-logo-musk-1.jpg?resize=1200,675",
    //   "publishedAt": "2023-10-02T20:58:06Z",
    //   "content": "When Elon Musk rebranded Twitter to X this summer, there wereconcerns that the new company could face trademark lawsuits as there were nearly 900 active U.S. trademark registrations that cover the le… [+3364 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Jacquelyn Melinek",
    //   "title": "SBF's trial promises to be just as riveting as the rest of the FTX drama | TechCrunch",
    //   "description": "'If the SBF trial starts to look like the crypto equivalent of an organized crime trial, don’t be surprised.'",
    //   "url": "https://techcrunch.com/2023/10/02/sbf-trial-ftx-drama/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1607951333.jpg?resize=1200,728",
    //   "publishedAt": "2023-10-02T20:00:35Z",
    //   "content": "All eyes are on Sam Bankman-Fried this week as the former CEO of crypto exchange FTX goes on trial in one of the biggest financial fraud cases of this decade on Tuesday. And it figures: This is set t… [+3082 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Garth Griffin",
    //   "title": "How our new AI feature earned 5% adoption in its first week | TechCrunch",
    //   "description": "We developed an 'AI as agent' approach and shipped a new AI capability that exploded to 5% adoption in the first week.",
    //   "url": "https://techcrunch.com/2023/10/02/how-our-new-ai-feature-earned-5-adoption-in-its-first-week/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-542594428.jpg?resize=1200,900",
    //   "publishedAt": "2023-10-02T19:27:12Z",
    //   "content": "Since the launch of ChatGPT, a stampede of technology company leaders has been chasing the buzz: Everywhere I turn, another company is trumpeting their pioneering AI feature. But real business value … [+3389 chars]"
    //   },
    //   {
    //   "source": {
    //   "id": "techcrunch",
    //   "name": "TechCrunch"
    //   },
    //   "author": "Aria Alamalhodaei",
    //   "title": "Max Q: Mining moon water | TechCrunch",
    //   "description": "TechCrunch's weekly newsletter dedicated to all things space, including launch, satellites, space stations and more.",
    //   "url": "https://techcrunch.com/2023/10/02/max-q-mining-moon-water/",
    //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/12/tc-space-hero.gif?w=949",
    //   "publishedAt": "2023-09-29T21:34:47Z",
    //   "content": "Hello and welcome back to Max Q!\r\nIn this issue:\r\n<ul><li>Mining water on the moon with Starpath Robotics</li><li>News from Blue Origin, SpaceX and more</li></ul>Starpath Robotics has emerged from st… [+983 chars]"
    //   }
    //   ]
    const { articles } = this.state; // Get articles from state

    return (

      <div className="newsComp container my-4">
        <h1 className="text-center">NewsHour - Top Headlines</h1>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
