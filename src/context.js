import React, { createContext, Component } from 'react';
export const ProductContext = createContext('default');
class ProductProvider extends Component {
    state = {
        documents: [
            {
                name: 'Eshan Tripathi',
                annotations: ['consectetur adipiscing elit', 'velit esse cillum', 'Excepteur sint occaecat'],
                metadata: 'Metadata',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            },
            {
                name: 'Task',
                annotations: ['consectetur adipiscing elit', 'velit esse cillum', 'Excepteur sint occaecat'],
                metadata: 'Metadata',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

            },
            {
                name: 'Document 3',
                annotations: ['consectetur adipiscing elit', 'velit esse cillum', 'Excepteur sint occaecat'],
                metadata: 'Metadata',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

            },
        ]
    }
    editDoc = (name, value, attr) => {
        const tempDocuments = this.state.documents.filter(doc => doc.name !== name);
        const newDoc = this.state.documents.filter(doc => doc.name === name)[0];
        if (attr === 'content') {
            newDoc.content = value;
        }
        else if (attr === 'annotations') {
            if (value) newDoc.annotations = [...newDoc.annotations, value]
        }
        else if (attr === 'remove') {
            newDoc.annotations = newDoc.annotations.filter(ann => ann !== value)
        }
        console.log(newDoc);
        this.setState(
            { documents: [...tempDocuments, newDoc] }
        )
    }
    render() {
        return (
            <ProductContext.Provider
                value={{ ...this.state, editDoc: this.editDoc }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
export default ProductProvider;