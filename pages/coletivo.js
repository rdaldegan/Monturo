import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 62.5%;
  overflow: hidden;
  position: relative;
  background-image: url('/alice-pasqual-evvaSEv1QIE-unsplash.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  min-height: 100vh;
  font-family: 'Press Start 2P', cursive;
  color: white;
`;
const Bg = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;

  .content{
    color: #CCCCCC;
    padding: 80px;
    width: 80%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 4em;
      line-height: 1.5em;
      padding-bottom: 50px;
    }
    p {
      font-size: 2.4em;
      line-height: 2em;
      text-align: justify;
      text-justify: inter-word;
    }
             
    @media (max-width: 830px) {
      h2{
        text-align: center;
      }
      p{
        text-align: left;
      }
    } 
  }
`;

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel venenatis neque, id elementum nulla. Nam a ante sed ligula posuere semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum molestie lorem eget ante auctor mattis. Vivamus accumsan augue euismod ligula dictum ultricies. Proin magna enim, hendrerit a dapibus quis, ornare vitae lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nisl augue, aliquam in gravida a, lobortis at urna. Ut feugiat orci ac turpis ultricies mollis. Quisque in neque fringilla, pellentesque neque facilisis, scelerisque purus.

Nullam porta, nisl ac suscipit auctor, arcu lorem pretium arcu, quis congue turpis mauris in lacus. Aliquam cursus et quam et lobortis. Aliquam erat volutpat. Praesent pellentesque justo lectus, at pulvinar nunc hendrerit ut. Mauris a sem quis ipsum semper sodales sed dictum massa. Proin arcu ante, ultrices vel tellus congue, bibendum sollicitudin enim. Nullam ullamcorper metus eget laoreet dignissim. Praesent porta, odio dapibus egestas pulvinar, elit nunc commodo sem, at facilisis purus felis id diam. Etiam semper ex velit, gravida malesuada est congue congue.

Sed pellentesque risus ut aliquam malesuada. Aenean et molestie ligula. Praesent tincidunt felis sollicitudin, dapibus neque sit amet, porta metus. Suspendisse vitae turpis non leo aliquet fermentum sit amet vel urna. Phasellus pulvinar elementum risus id tincidunt. Curabitur fermentum varius auctor. Donec fermentum placerat odio, nec vestibulum turpis posuere ut. Phasellus vel turpis non mi ultrices faucibus et at massa. Nullam magna arcu, sollicitudin vel tellus vitae, venenatis sodales leo.

Donec gravida ultrices ipsum quis elementum. Quisque dolor ipsum, interdum at velit sit amet, tristique scelerisque massa. Nulla facilisis turpis id ante maximus tempor. Aliquam pretium consequat volutpat. Sed sed felis at nisl posuere pulvinar at id nunc. Cras pellentesque dolor ut est feugiat laoreet. Quisque pulvinar, lorem et dapibus dapibus, massa mauris dictum libero, et convallis purus sem ullamcorper lorem. Phasellus orci libero, malesuada quis placerat non, dictum vitae orci. Integer a sapien vel orci pellentesque pretium vel a quam. Aenean a ultricies tortor. Ut venenatis pulvinar placerat. Duis feugiat ipsum non lorem luctus, imperdiet facilisis eros molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam lobortis placerat lectus, sit amet congue lacus.

Vivamus dapibus pulvinar venenatis. Mauris imperdiet efficitur elit, non ultricies nunc sagittis quis. Donec auctor fringilla cursus. Donec porta odio et sagittis malesuada. Etiam pharetra pretium posuere. Sed porta ipsum vitae pulvinar pulvinar. Duis nec ligula malesuada, interdum est suscipit, sodales diam. Nunc vulputate at massa eget pretium. Integer et imperdiet odio.

Vestibulum aliquet imperdiet lacus, eget venenatis ligula facilisis et. Proin elementum nulla vel accumsan tincidunt. Morbi porttitor posuere ligula, a congue augue eleifend in. Suspendisse non ligula suscipit, aliquam mi sed, sagittis magna. Duis cursus volutpat erat ac mollis. Aenean sit amet libero mollis, mattis justo in, rhoncus leo. Morbi non diam laoreet, porta lorem nec, elementum nisl. Sed bibendum, lectus ac hendrerit sollicitudin, tellus elit vestibulum magna, id placerat massa elit eget tellus. Aenean nisi diam.`;

export default function Coletivo() {
  return (
    <Container>
      <Bg>
        <div className="content">
          <h2>Coletivo Monturo</h2>
          <p>
            {lorem}
          </p>
        </div>
      </Bg>
    </Container>
  );
}
