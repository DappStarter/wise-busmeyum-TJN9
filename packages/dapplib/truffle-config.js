require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food chef rifle remain quality install hat army gas'; 
let testAccounts = [
"0x4160dc82730127e070ffff0439539106d314f8827ab2a9026000eef30ac81de1",
"0x1ba38da17100eb032800984c85311d3ced5567185874ceac559b1a75a092b643",
"0x8542ca5ce444a61845d1a1de88590ebffe4ce1d7cb22c6f16824d5eb50cbad56",
"0xddde5c5f03f051377598b0c4caae8b35f84a18919b639b54eb43113d34754f60",
"0xf9fc37ead85dbe66cc74b715a477fcbbd7943fcbd16588057b5be0de1c0d715a",
"0x12731ad144228661264d66f44627af6e04b360e9074a22948eb15c17a293fcaa",
"0x8f3db12061ff4d7be350d07a89f0e40de31fa0afd3b0ddd8ccbde4429cce7ef1",
"0x2c537bce2d6341d800b273b2eb39e0ee3e86cb53409680ef082819181f3c2cee",
"0x8fa7963c58de311a15c7c4146f53812855049a7322a5422c825f570e1a46bfa8",
"0x172d2ee2c28e5b7d95bd852bff18a2d0b35c4a4838579d14296abbba3a5ff401"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


