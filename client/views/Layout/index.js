import React from "react";
import Greetings from './../../components/Greetings/Greetings'
import NavigationBar from './../../components/Navigation/navigation'
import FlashMessagerList from './../../components/flash/flash-message-list'
class Layout extends React.Component {
  render () {
    return (
      <div>
      <Greetings />
      <FlashMessagerList />
      </div>
    )
  }
}
export default Layout;
