import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(HelloWorld, {
      propsData: {
        name: 'red',
        initialEnthusiasm: '10'
      }}
    );
    expect(wrapper.contains('.hello')).toBe(true);
    console.log(wrapper.props().name);
    expect(wrapper.props().name).toEqual('red');
  })
})
