import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Amygdala AI: Openings");
    }

    async getHtml() {
        return `
            <h2 class="liner">Join Us</h2>
            <div class=WordSection1>

<p class=MsoNormal style='text-align:justify'>We at Amygdala work as voluntary collaborators
in different roles and we are open to collaborate with highly motivated and
enthusiastic researchers worldwide. <span style='mso-spacerun:yes'> </span>For
each research idea we work in balanced sub teams consisting of advisors,
mentors and associates. Sub teams are formed internally based on individual
research interest and area of expertise.</p>

<p class=MsoListParagraphCxSpFirst style='text-align:justify;text-indent:-18.0pt;
mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Symbol;
mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol'><span
style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:16.0pt;line-height:
107%'>Advisors</span></b>: Our advisors are usually experienced eminent researchers
with several prestigious publications in top conferences and journals. Their
role is to come up with high level research ideas and lead some sub teams who
will implement these ideas. Usually, the professors, postdocs, PhD holders or someone
pursuing PhD with good track record are well suited for this role. However,
that’s not a strict requirement. If you are motivated to be one of our advisors,
<b>please write to us</b> a short email at <a href="mailto:amygdalaai@gmail.com"><span
style='font-family:"Segoe UI",sans-serif;color:teal;background:white;
text-decoration:none;text-underline:none'>amygdalaai@gmail.com</span></a> with
subject “Advisor position at Amygdala”.</p>

<p class=MsoListParagraphCxSpMiddle style='text-align:justify'><o:p>&nbsp;</o:p></p>

<p class=MsoListParagraphCxSpMiddle style='text-align:justify;text-indent:-18.0pt;
mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Symbol;
mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol'><span
style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:16.0pt;line-height:
107%'>Mentors</span></b>: Our mentors are usually master’s students or bachelor’s
students with a few publications and more practical experience with the usual
structure of ML / DL code. Knowledge of frameworks like <span class=SpellE>PyTorch</span>,
TensorFlow, <span class=SpellE>Keras</span> is a plus. Mentors’ role is to
closely guide and help the associates in implementation of the research ideas
proposed by advisors. If you want to join us as a mentor, please <b>fill the
Google form</b> at the end of this page.</p>

<p class=MsoListParagraphCxSpMiddle style='text-align:justify'><o:p>&nbsp;</o:p></p>

<p class=MsoListParagraphCxSpLast style='text-align:justify;text-indent:-18.0pt;
mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Symbol;
mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol'><span
style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:16.0pt;line-height:
107%'>Associates</span></b>: Associates are the ones who work on the hands-on
implementation of the research ideas of the advisors with help of the mentors. Anyone
with research high research interest and motivation for academic publication
are suitable for this role. Having previous publications is not required,
however, good coding skills (preferably in Python or C++) and familiarity with object-oriented
programming approach would be optimal. If you want to join us as an associate,
please <b>fill the Google form</b> at the end of this page.</p>

<p class=MsoNormal align=center style='text-align:center'><b><o:p>&nbsp;</o:p></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span
style='font-size:16.0pt;line-height:107%'>Google Form (only for mentors and
associates)<o:p></o:p></span></b></p>

<p class=MsoNormal style='text-align:justify'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal style='text-align:justify'><o:p>&nbsp;</o:p></p>

<p class=MsoNormal style='text-align:justify'><b><span style='color:red'>Disclaimer:</span></b><span
style='color:red'> <span style='mso-spacerun:yes'> </span>Please note as of now
Amygdala AI works on voluntary collaboration which means neither we pay, nor we
ask for money from our collaborators. However, everyone working on different
ideas on different sub teams gets due credit as authorship if that idea yields
an academic publication. It is also to clarify that different sub teams work on
different research ideas and there is no cross sub team authorship unless there
is overlap of their research ideas and they collaborate as two sub teams.<o:p></o:p></span></p>

<p class=MsoNormal style='text-align:justify'><o:p>&nbsp;</o:p></p>

</div>
`;
    }
}
