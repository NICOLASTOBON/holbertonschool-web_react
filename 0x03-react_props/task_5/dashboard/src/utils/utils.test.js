import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

describe('Check utils functions', () => {
  it('getFullyear return current year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear())
  })
  it('getLatestNotification return a string urgent requirement', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD')
  })
  it('getFooterCopy returns the correct string when the argument is true or false', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School')
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard')
  })
})