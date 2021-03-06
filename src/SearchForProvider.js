import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Input, TextInput, Button } from 'react-native';
import {url} from '../url'

//ifconfig |grep inet
     // use second one

const SearchForProvider = () => {
    const [providers, setProviders] = useState([])
    const [zip, setZip] = useState('')

    const getProviders = () => {
        console.log('hit', zip)
        axios.get(`${url.url}/api/searchProviders/${zip}`).then(res => {
            setProviders(res.data)
        })
    }

    const mappedProviders = providers.map(provider => {
        return (
            

            <View key={provider.id}>
                {/* <i className="far fa-comment-dots"></i> */}
                <Text>{provider.name}</Text>
                <Text>{provider.experience}</Text>
                <Text>{provider.short_desc}</Text>
                <Text>--------------</Text>

            </View>

        )
    })
    console.log(zip)
    return (
        <View className="SearchForProvider">
            <Text>Search For Provider</Text>
            <Text>Search by zip code:</Text>

            <TextInput
                    style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='zip'
                    onChangeText={(zip) => setZip(zip)} value={zip}
                />
            {/* <TextInput type='integer' placeholder='zip' maxLength={5} onChangeText={(e) => setZip(e.target.value)} value={zip}
            /> */}

            <Button
                onPress={() => getProviders()}
                title="Search"
                color="#841584"
                accessibilityLabel="Get Providers"
            />

            {mappedProviders}
        </View>
    );
}

export default SearchForProvider









