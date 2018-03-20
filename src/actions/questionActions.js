import { createAction } from 'redux-actions';
const PREFIX = 'Questions.'

export const INIT = PREFIX + 'INIT'
const init = createAction(INIT)
