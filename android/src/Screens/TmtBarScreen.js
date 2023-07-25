import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

const TmtBarScreen = () => {
  const handleTmtBarPress = (barSize) => {
    // Handle TMT bar box press based on the barSize
    console.log(`Pressed ${barSize} bar box`);
  };

  return (
    <View style={styles.container}>
              <ScrollView contentContainerStyle={styles.contentContainer} vertical>

      <View style={styles.column}>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('6mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>6mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('10mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>10mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('16mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>16mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('25mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>25mm Bar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('8mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>8mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('12mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>12mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('20mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>20mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('32mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>32mm Bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barBox}
          onPress={() => handleTmtBarPress('40mm Bar')}
        >
          <Image source={require('../Screens/tmt-bar.jpg')} style={styles.barImage} />
          <Text style={styles.barText}>40mm Bar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FADADD', // Light pinkish background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  barBox: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  barImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  barText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TmtBarScreen;
