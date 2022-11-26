import './style.css';
import HeaderTitle from '../../components/headertitle/HeaderTitle';
import Card from '../../components/card/Card';
const Services = () => {
  return (
    <article id="services" className="container">
      <HeaderTitle title='My Services' />
      <div className="service-list">
        <Card icon='fa-solid fa-code service-icon' title='Web Design' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in iusto facere dolore vel ipsum eum neque accusamus nihil consectetur.'/>
        <Card icon='fas fa-crop-alt service-icon' title='UI/UX Design' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in iusto facere dolore vel ipsum eum neque accusamus nihil consectetur.'/>
        <Card icon='fab fa-app-store service-icon' title='App Design' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in iusto facere dolore vel ipsum eum neque accusamus nihil consectetur.'/>
      </div>
    </article>
  )
}

export default Services