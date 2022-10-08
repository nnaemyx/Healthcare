import Icon1 from './images/online.svg'
import Icon2 from './images/customer.svg'
import Icon3 from './images/counselling.svg'
import Insurance1 from './images/Insurance1.svg';
import Insurance2 from './images/Insurance2.svg';
import Insurance3 from './images/Insurance3.svg';
import Team2 from './images/Team2.svg'
import Team3 from './images/Team3.svg'



export const services = {
  title: "Our Services",
  paragraphs:
    "We care about your health and we have provided the best care that can work for you and your family members ",
  content: [
    {
      Icons: <Icon1 />,
      heading: "Online Pharmacy",
      paragraph:
        "You can buy your medicine and get prescriptions with fast and easy delivery to your doorstep",
      button: "Learn More",
    },
    {
      Icons: <Icon2 />,
      heading: "24/7 Customer Service ",
      paragraph:
        "Artificial Intelligence Driven Software has supporting call operation for timely and swift customer care support",
      button: "Learn More",
    },
    {
      Icons: <Icon1 />,
      heading: "Experienced Doctors ",
      paragraph:
        "You can choose your prefereed doctor or nurse from our wide range of exeperinced specialists",
      button: "Learn More",
    },
    {
      Icons: <Icon3 />,
      heading: "Councelling and Community ",
      paragraph:
        "Free consultation with our trusted counsellors to get the best recommemdation and access to community support ",
      button: "Learn More",
    },
    {
      Icons: <Icon1 />,
      heading: "Emergency Unit ",
      paragraph:
        "You don’t have to travel far to get assessible health care. We have partnered with hopitals in your vicinity  to offer you affordable and simplofied medical services.",
      button: "Learn More",
    },
    {
      Icons: <Icon1 />,
      heading: "Hopsitals are near you ",
      paragraph:
        "You don’t have to travel far to get assessible health care. We have partnered with hopitals in your vicinity  to offer you affordable and simplofied medical services.",
      button: "Learn More",
    },
  ],
};

export const qualified = {
  title: "Our Qualified Team ",
  paragraphs: "Book a session with our team and get the best recommendations ",
  content: [
    {
      image: <Insurance3 />,
      heading: "Sandra Dorson ",
      paragraph: "Sales Person ",
      button: "Book Session",
    },
    {
      image: <Team2 />,
      heading: "Cassandra Levi",
      paragraph: "General Manager   ",
      button: "Book Session",
    },
    {
      image: <Team3 />,
      heading: "Poppy Carter ",
      paragraph: "Head Of Marketing  ",
      button: "Book Session",
    },
  ],
};

export const insurance = {
  title: "Our Insurance Plans ",
  paragraph:
    "Learn more about our insurance pricing plans from and choose the best health insurance plan for you and your family ",
  content: [
    {
      image: <Insurance3 />,
      heading: "Insurance Plans For you ",
      button: "Learn More",
    },
    {
      image: <Insurance1 />,
      heading: "Insurance Plan for your Kids",
      button: "Learn More",
    },
    {
      image: <Insurance2 />,
      heading: "Insurance Plan for your Parents ",
      button: "Learn More",
    },
  ],
};