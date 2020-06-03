function match(el, selector) {
    if (!selector || !el.attributes) {
      return false
    }
    if (selector.charAt(0) == '#') {
      let attr = el.attributes.filter((attr) => attr.name == 'id')[0]
      if (attr && attr.value == selector.replace('#', '')) {
        return true
      }
    } else if (selector.charAt(0) == '.') {
      let attr = el.attributes.filter((attr) => attr.name == 'class')[0]
      if (attr && attr.value == selector.replace('.', '')) {
        return true
      }
    } else {
      if (el.tagName == selector) {
        return true
      }
    }
    return false
  }