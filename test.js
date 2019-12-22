import test from 'ava'
import m from '.'

const hashes = {
	128: '3edc724c455361be0a366c838e7d2434',
	160: '744fdac358014a96aedd7e87150c5a5e04a13001',
	256: 'e5c8b27f501d94ce19f93b35959d5cbda22ec2645db19cf63ca072f7d70b5e79',
	320: 'f4971074a8da200c122c04bc4e0fa96066913d6f38d3397eb61a7341078cd4841386e159993826af'
}
const notHashes = [
	'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
	'983d515094574856a57db3a13741f0a65509bb640bfa551e78fa01d9'
]

test('ripemd', t => {
	for (const x in hashes) {
		t.true(m({exact: true}).test(hashes[x]))
		t.is((m().exec(`foo ${hashes[x]} bar`))[0], hashes[x])
	}

	for (const x of notHashes) {
		t.false(m({exact: true}).test(x))
	}
})

test('ripemd version', t => {
	for (const v in hashes) {
		t.true(m.version(v, {exact: true}).test(hashes[v]))
		t.is((m.version(v).exec(`foo ${hashes[v]} bar`))[0], hashes[v])
		for (const notHash of notHashes) {
			t.false((m.version(v).test(notHash)))
		}
	}
})

test('ripemd version mismatch', t => {
	t.false(m.version(160, {exact: true}).test(hashes[128]))
	t.false(m.version(128, {exact: true}).test(hashes[160]))

	t.throws(() => {
		m.version(1337)
	})
})

test('ripemd with spaces', t => {
	t.false(m.version(320, {exact: true}).test(hashes[320] + '  '))
	t.false(m({exact: true}).test('   ' + hashes[320]))
})
