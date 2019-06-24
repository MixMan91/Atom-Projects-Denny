SinOsc s=> NRev rev => dac;

for ( 0 => int foo; foo < 4 ; foo++){
    110 => s.freq;
    500::ms => now;
    113 => s.freq;
    500::ms => now;
    110 => s.freq;
    500::ms => now;
    103 => s.freq;
    500::ms => now;
}
for ( 0 => int foo; foo < 4 ; foo++){
    115 => s.freq;
    500::ms => now;
    118 => s.freq;
    500::ms => now;
    115 => s.freq;
    500::ms => now;
    108 => s.freq;
    500::ms => now;
}
