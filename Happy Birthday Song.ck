class Note
{
    // pre-constructor, run every time an instance is created
    SinOsc o => Envelope e => dac;
    500::ms => dur tempo;
    
    fun void quarter(int m)
    {
        SinOsc lfo => blackhole;
        9 => lfo.freq;
        
        Std.mtof(m) => o.freq;
        e.keyOn();
        tempo => now;
        (lfo.last() * 10) + m => o.freq;        
        e.keyOff();
    }
}


Note n;
//happy birthday to you
n.quarter(57);
n.quarter(59);
n.quarter(57);
n.quarter(62);
n.quarter(61);
n.quarter(61);

//happy birthday to you
n.quarter(57);
n.quarter(59);
n.quarter(57);
n.quarter(64);
n.quarter(62);
n.quarter(62);

//happy birthday dear Beyonce
n.quarter(57);
n.quarter(69);
n.quarter(66); 
n.quarter(62);
n.quarter(61);
n.quarter(59);
n.quarter(59);

//happy birthday to you
n.quarter(66);
n.quarter(62);
n.quarter(57);
n.quarter(64);
n.quarter(62);
n.quarter(62);