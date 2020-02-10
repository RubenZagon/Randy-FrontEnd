---
to: src/components/<%= name %>/index.tsx
---
import { <%= name %> as <%= name %>Component} from "./<%= name %>";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    // ejemplo -> billData: state.billsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // ejemplo -> fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= name %>Component)
