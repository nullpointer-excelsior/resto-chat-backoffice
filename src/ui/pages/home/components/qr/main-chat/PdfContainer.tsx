import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from "@react-pdf/renderer";

// Create styles for pdf renderer
const styles = StyleSheet.create({
    tableSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    tableText: {
        width: '50%',
        padding: 15,
        backgroundColor: '#aa2e25',
        color: '#b9f6ca',
        borderRadius: '30px',
        fontSize: 20,
        textAlign: 'center',
    },
    tableLogo: {
        padding: 15,
        backgroundColor: '#aa2e25',
        color: '#b9f6ca',
        borderRadius: '30px',
        fontSize: 10,
        // textAlign: 'center',
    },
    page: {
        padding: 150
    },
    qrSection: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    about: {
        textAlign: 'center'
    }
});

export default function PdfContainer({  source }) {
    return (
        <PDFViewer width={600} height={500}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <View style={styles.tableSection}>
                            {/* <View style={styles.tableLogo} >
                                <Text>MC</Text>
                            </View> */}
                            <View style={styles.tableText} >
                                <Text>Table Nº </Text>
                            </View>
                        </View>
                        <Image style={styles.qrSection} source={source}></Image>
                        <Text style={styles.about}>www.menu-caller.cl</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}