export default function getModalName(classNameString){
  const version = String(classNameString).replace(/[\r\n]+/g," ").split(' ').find(item => /version/.test(item))
  return `signup-${version || 'version1'}`
}
