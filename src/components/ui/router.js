import {Match, Switch, defineMatch} from 'zefir/router'

const isGuest = ({stores}) => !stores.auth.isLoggedIn
const MatchAsGuest = defineMatch(isGuest)

const isMember = ({stores}) => stores.auth.isLoggedIn
const MatchAsMember = defineMatch(isMember)

export {Match, MatchAsGuest, MatchAsMember, Switch}
