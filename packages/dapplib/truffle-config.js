require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note script coach gloom ensure outer gas'; 
let testAccounts = [
"0xa3f7991ae1fb97388294d074e4268286999ba1dfd5cfdc0a1790763708fc30e0",
"0x0c03511c0aa210fe786f0aaae2172817081cd3ca3da6eecc34bc7883f5f94be2",
"0x694692eeea05f2f546549e13554adeeb86c1f1a2dcb122b9346a9ee284e994ef",
"0xa6326fb0826686b34dc33275842ccc74700f3cde41daa07b038053ab3daba83e",
"0x00cebe888af0c22dd003a8245b93c55db137afc75979c12b7e7f634a1694f354",
"0x07c21a27836db37afe6b33ab3547b6a93a48719f70f60d97cd328f90f1fc6821",
"0x0c07ca9835c59c917931419f8d1ca53443250f90878dbcefab4b53d5416ee95e",
"0xeda281feb80e32d964bc7f7cddb9c6d20691347d226bbd4f51f535cad7f4581e",
"0x092bbd3f0c8eec41efa4814542eb6ec8a9ba456f0ea546a9a37a222f0f0727ab",
"0xc78a78e91656539c998b41656a1d35361c77576c05af6937ca3e7aaebdad4519"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

