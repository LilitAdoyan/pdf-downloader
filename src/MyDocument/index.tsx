import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "./lebron_transparent.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document  onLoadError={console.error} >
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={LebronStretch} />
        <Text style={styles.text}>
        
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra felis felis, vel rutrum mauris sagittis eget. Sed felis nunc, tincidunt in luctus at, aliquam id mi. In hac habitasse platea dictumst. Aenean ut ipsum eget enim fermentum bibendum id a quam. Sed in nunc metus. Curabitur mattis eros posuere viverra malesuada. Aliquam blandit massa nec nulla hendrerit, nec pulvinar felis fringilla. Ut laoreet venenatis feugiat. Morbi pharetra odio at vehicula sollicitudin. Etiam pulvinar sapien in nisl malesuada auctor. Phasellus a purus lorem. Donec faucibus diam et lorem varius, et scelerisque nunc sollicitudin.

Aliquam quis quam interdum, fermentum leo id, posuere justo. Mauris et nulla eget orci viverra scelerisque laoreet eu dolor. Suspendisse eget porta nunc, non euismod diam. Etiam laoreet magna lacus, nec sollicitudin leo consequat et. Integer sollicitudin efficitur metus, in dictum purus eleifend ut. Fusce vitae nisl quis dui aliquet fermentum. Suspendisse scelerisque dapibus arcu, nec condimentum diam maximus vitae. Donec lobortis luctus feugiat.

Maecenas dolor justo, congue dapibus ornare id, dictum a nulla. Phasellus in mi ut odio congue porta ut a dui. Vivamus eget lorem maximus, laoreet turpis vitae, accumsan nulla. In lobortis turpis nulla, id congue orci posuere et. Sed quis pretium mi, vitae egestas nulla. Fusce lectus nibh, iaculis sit amet metus nec, varius venenatis quam. Aenean ut massa in arcu molestie tristique lacinia quis diam. Morbi volutpat porta iaculis. Nulla facilisi. Vivamus sed ligula vehicula, elementum justo non, tincidunt nunc.

Fusce luctus porta purus in accumsan. Phasellus sit amet venenatis leo. Sed tincidunt odio ut dui rutrum, sit amet blandit eros venenatis. Praesent vel iaculis orci. Aliquam posuere erat sit amet sapien tempus lacinia. Curabitur id nunc augue. Sed finibus vitae urna ac congue. Suspendisse sed lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultrices nunc odio, vel laoreet lacus faucibus sit amet. Pellentesque accumsan elit lectus, et gravida arcu mattis non. Integer non lorem luctus, feugiat justo ut, euismod tortor. In fringilla tempor justo, eu congue tellus rhoncus vitae. Pellentesque vehicula semper quam. Nam hendrerit metus enim, sit amet mattis felis gravida et.

Duis gravida tortor in sem maximus pharetra. Phasellus ligula mi, tincidunt eget fringilla in, tempus et nisi. Donec at vulputate quam. Nulla sit amet ipsum libero. Pellentesque sed sem et nisl sodales laoreet eu ornare dolor. Integer non nulla diam. Proin ut magna placerat purus congue malesuada sit amet maximus lectus. Duis id malesuada turpis, id vehicula mi.

Generated 5 paragraphs, 405 words, 2661 bytes of Lorem Ipsum
help@lipsum.com
Privacy Policy

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra felis felis, vel rutrum mauris sagittis eget. Sed felis nunc, tincidunt in luctus at, aliquam id mi. In hac habitasse platea dictumst. Aenean ut ipsum eget enim fermentum bibendum id a quam. Sed in nunc metus. Curabitur mattis eros posuere viverra malesuada. Aliquam blandit massa nec nulla hendrerit, nec pulvinar felis fringilla. Ut laoreet venenatis feugiat. Morbi pharetra odio at vehicula sollicitudin. Etiam pulvinar sapien in nisl malesuada auctor. Phasellus a purus lorem. Donec faucibus diam et lorem varius, et scelerisque nunc sollicitudin.

Aliquam quis quam interdum, fermentum leo id, posuere justo. Mauris et nulla eget orci viverra scelerisque laoreet eu dolor. Suspendisse eget porta nunc, non euismod diam. Etiam laoreet magna lacus, nec sollicitudin leo consequat et. Integer sollicitudin efficitur metus, in dictum purus eleifend ut. Fusce vitae nisl quis dui aliquet fermentum. Suspendisse scelerisque dapibus arcu, nec condimentum diam maximus vitae. Donec lobortis luctus feugiat.

Maecenas dolor justo, congue dapibus ornare id, dictum a nulla. Phasellus in mi ut odio congue porta ut a dui. Vivamus eget lorem maximus, laoreet turpis vitae, accumsan nulla. In lobortis turpis nulla, id congue orci posuere et. Sed quis pretium mi, vitae egestas nulla. Fusce lectus nibh, iaculis sit amet metus nec, varius venenatis quam. Aenean ut massa in arcu molestie tristique lacinia quis diam. Morbi volutpat porta iaculis. Nulla facilisi. Vivamus sed ligula vehicula, elementum justo non, tincidunt nunc.

Fusce luctus porta purus in accumsan. Phasellus sit amet venenatis leo. Sed tincidunt odio ut dui rutrum, sit amet blandit eros venenatis. Praesent vel iaculis orci. Aliquam posuere erat sit amet sapien tempus lacinia. Curabitur id nunc augue. Sed finibus vitae urna ac congue. Suspendisse sed lorem tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultrices nunc odio, vel laoreet lacus faucibus sit amet. Pellentesque accumsan elit lectus, et gravida arcu mattis non. Integer non lorem luctus, feugiat justo ut, euismod tortor. In fringilla tempor justo, eu congue tellus rhoncus vitae. Pellentesque vehicula semper quam. Nam hendrerit metus enim, sit amet mattis felis gravida et.

Duis gravida tortor in sem maximus pharetra. Phasellus ligula mi, tincidunt eget fringilla in, tempus et nisi. Donec at vulputate quam. Nulla sit amet ipsum libero. Pellentesque sed sem et nisl sodales laoreet eu ornare dolor. Integer non nulla diam. Proin ut magna placerat purus congue malesuada sit amet maximus lectus. Duis id malesuada turpis, id vehicula mi.

Generated 5 paragraphs, 405 words, 2661 bytes of Lorem Ipsum
help@lipsum.com
Privacy Policy

        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;