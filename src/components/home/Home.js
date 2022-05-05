import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div className='Home'>
                <div className='img-cluster' id='column'>
                    <img src={require('../../images/vmontiel-icon.jpg')} alt='headshot of woman' className='self-portrait'></img>
                    {/* <img src={require('../../images/vmontiel-icon.jpg')} alt='headshot of woman' style={{height:'150px'}}></img>
                    <img src={require('../../images/vmontiel-icon.jpg')} alt='headshot of woman' style={{height:'150px'}}></img> */}
                </div>
                <div className='intro' id='column'>
                    <h1 id='name'> Vanessa Montiel </h1>
                    <p>
                        &#128105; Hi, my name is Vanessa <br/>
                        &#127891; B.S. Computer Science CSULB '21 <br/>
                        &#128205; Los Angeles, CA <br/>
                        &#128187; Software Engineer  <br/>
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;
