import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 20 },
  title: { fontSize: 20, marginBottom: 10, fontWeight: "bold" },
  section: { marginBottom: 10 },
  image: { width: "100%", height: 200, borderRadius: 10 },
  text: { fontSize: 14 },
});

const stripHtml = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

const PropertyPDF = ({ property }) => {
  const { t, i18n } = useTranslation();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImageAsBase64 = async (url) => {
        console.log("Fetching image from:", url);
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            console.log("Base64 Data:", reader.result); // Log first 100 chars
            resolve(reader.result);
          };
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error fetching image:", error);
        return null;
      }
    };

    if (property.files?.[0]?.url) {
      fetchImageAsBase64(property.files[0].url).then(setImageData);
    }
  }, [property]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          {i18n.language === "en" ? property.title_en : property.title_ar}
        </Text>
        {imageData ? (
          <Image style={styles.image} src={imageData} />
        ) : (
          <Text>Loading Image...</Text>
        )}
        <Text style={styles.text}>-----------------------</Text>
          { <Image alt="Converted Image" 
                src="data:image/avif;base64,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" 
                style={{width: "100px", height: "100px"}} />}
        <View style={styles.section}>
          <Text style={styles.text}>Location: {property.city}</Text>
          <Text style={styles.text}>Beds: {property.beds}</Text>
          <Text style={styles.text}>Bedrooms: {property.bedrooms}</Text>
          <Text style={styles.text}>Bathrooms: {property.bathrooms}</Text>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.text}>
            {i18n.language === "en"
              ? stripHtml(property.description_en)
              : stripHtml(property.description_ar)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PropertyPDF;