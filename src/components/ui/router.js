import {Match, Switch, defineMatch} from 'zefir/router'

const isGuest = ({stores}) => !stores.user.isLoggedIn
const MatchAsGuest = defineMatch(isGuest)

const isMember = ({stores}) => stores.user.isLoggedIn
const MatchAsMember = defineMatch(isMember)

export {Match, MatchAsGuest, MatchAsMember, Switch}
