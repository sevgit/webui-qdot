import Comments from './Comments';
import * as mobx from 'mobx';
import {mockData, formattedMockData} from './mockData';

describe('fetchComments() should attempt to fetch comments and behave accordingly', () => {

  test('If it fails, this.state should be equal to error', async () => {
    await Comments.fetchComments('fakeurl')
    expect(Comments.state).toBe('error')
  })
})

describe('addComments() should manipulate Comments.state and Comments.list accordingly', () => {
  test('Comments.state should be equal to DONE if it recieves DONE and valid data', async () => {
    await Comments.addComments('done', mockData)
    expect(Comments.state).toBe('done');
  })
  test('Comments.state should be equal to ERROR if it recieves ERROR as an argument', async () => {
    await Comments.addComments('error')
    expect(Comments.state).toBe('error');
  })
  test('Comments.state should be equal to ERROR if it doesnt recieve any data', async () => {
    await Comments.addComments('done')
    expect(Comments.state).toBe('error');
  })
  test('If state equals DONE, Comments.list.length should equal data.length', async () => {
    await Comments.addComments('done', mockData)
    expect(Comments.list).toHaveLength(mockData.length);
  })
  test('Comments.list should equal the recieved data', async () => {
    await Comments.addComments('done', mockData)
  
    expect(mobx.toJS(Comments.list)).toEqual(formattedMockData);
    
  })
})
