import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardActions, CardContent, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import Wettanbieter from './components/Wettanbieter';

function Bonus(props) {
    return (
        <Container sx={{background: "white"}}>
        
            <Typography variant='h2' className='text-center'>Die besten Sportwettanbieter</Typography>
            <Typography component="p" mt={1} mb={1}>Bereits seit einigen Jahren sind Sportwetten bei online Wettanbietern sehr beliebt. Ob Sie jung oder schon etwas älter sind spielt keine Rolle solange sie älter als 18 Jahre alt sind. Die Leidenschaft für den Sport, die uns alle vereint zusätzlich dem kleinen Nervenkitzel machen Sportwetten-Angebote unwiderstehlich.</Typography>
            <Typography component="p" mb={2}>
                Um Ihnen bei Ihrer Auswahl des passen Sportwettenanbieters behilflich zu sein, teilen wir unsere Erfahrungen und vergleichen sie auch für euch. Wir empfehlen auf die Vorteile eines Anbieters zu achten bevor man ein Konto erstellt. Es kann ja sein, dass der Bonus eines Wettanbieters viel besser für Sie wäre, als der Bonus eines anderen Wettanbieters.
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                    <Wettanbieter vorteil1={"Sehr viele Boni-Promotions"} vorteil2={"Zahlreiche E-Sports Angebote"} vorteil3={"Sehr gute Quoten"} type={"n1bet"} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Wettanbieter vorteil1={"200€ Neukundenbonus"} vorteil2={"Sehr guter Support"} vorteil3={"Viele Promotions"} type={"librabet"}/>

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Wettanbieter vorteil1={"100% Bonus bis zu 100€"} vorteil2={"Viele Sportarten"} vorteil3={"Österreichischer Anbieter"} type={"cashpoint"}/>

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Wettanbieter vorteil1={"100€ Ersteinzahlungsbonus"} vorteil2={"Gigantisches Wettangebot"} vorteil3={"Benutzerfreundliche App"} type={"mrgreen"}/>

                </Grid>
            </Grid>
            <Typography variant='h5' mt={3}>BEI DER WAHL DES WETTANBIETERS EMPFEHLEN WIR AUF IHRE PRIORITÄTEN ZU ACHTEN</Typography>
            <Typography component="p" mt={1} mb={1}>Heutzutage hat man die Qual der Wahl. Ob betiton, n1bet, tipico, mr green, librabet oder Andere, nie gab es so viele Wettanbieter wie heute. Hunderte Buchmacher teilen sich den Markt unter sich auf. Daher ist es schwierig zu wissen, für wen man sich entscheiden sollte. Sollten Sie auf der Suche nach einem Buchmacher sein, müssen Sie für sich entscheiden, welche Faktoren Ihnen am wichtigsten sind. Legen Sie Wert auf hohe Quoten, vielseitiges Angebot, gute Bonusbedingungen, einfache Benutzeroberfläche? Mit diesem Artikel möchten wir Ihnen die Wahl so einfach wie möglich gestalten.</Typography>
            <Typography component="p" mt={1} mb={1}>
        Da Sie Zeit auf der Plattform Ihres Wettanbieters verbringen möchten, sollten Sie darauf achten, dass diese über eine einfache Benutzeroberfläche hat, die nicht „anstrengend“ und leicht bedienbar ist. Darunter verstehen wir, dass das Design farblich einfach und harmonisch gestaltet ist. Die Rubriken sollten gut organisiert und leicht zu bedienen sein, Sie wollen ja nicht zu viel Zeit damit verbringen, die richtigen Informationen zu finden. Um herauszufinden, welcher Anbieter die beste Benutzeroberfläche hat, können Sie den Test machen. Am besten wäre die Webseiten der verschiedenen Anbieter miteinander zu vergleichen um dann für sich zu entscheiden, welcher Anbieter am besten zu Ihnen passt.
    </Typography>
    <Typography variant='h5' mt={3}> ACHTEN SIE VOR DER ANMELDUNG DARAUF, WELCHE WETTEN IHR BUCHMACHER ANBIETET</Typography>
    <Typography component="p" mt={1} mb={1}>
        Ein wichtiges Qualitätskriterium ist eine große Auswahl. Der Buchmacher sollte ein vielseitiges Angebot aufführen. Wir bevorzugen Buchmacher mit mindestens 15 Sportarten. Zudem bieten einige auch Nicht-sportliche Wetten an, wie zum Beispiel Song Contest Wetten, Politische Wahlen und etc.
    </Typography>
    <Typography component="p" mt={1} mb={1}>
        Danach sollte überprüft werden, welche Arten von Wetten der Buchmacher anbietet (Live-Wetten, asiatisches Handicap, Karten/Ecken-Wetten oder etc.). Das Angebot sollte stets spannend und abwechslungsreich sein, denn jeder Kunde hat individuelle Wünsche. Infos zu den den Wett-Arten finden Sie auf der Website des Buchmachers (einfach das gewünschte Spiel auswählen und überprüfen welche Wettmöglichkeiten es gibt).
    </Typography>
    <Typography component="p" mt={1} mb={1}>
    Natürlich bringt das beste Angebot nichts, wenn die Gewinnquoten nicht lukrativ sind. Sie möchten ja schließlich so viel Geld wie möglich gewinnen. Daher empfehlen wir Ihnen sich einen Quotenvergleicher anzusehen. Es gibt verschiedene Seiten wie oddspedia oder flashscore welche einen Quotenvergleich anbieten.
    </Typography>
    <Typography variant='h5' mt={3}>  ACHTEN SIE AUCH AUF DIE BONI ANGEBOTE</Typography>
    <Typography component="p" mt={1} mb={1}>
    Die meisten Buchmacher bieten verschiedene Boni an. Hierfür ist zwischen Neukunden und bestehenden Kunden Bonus zu unterscheiden. Neukunden bekommen meist einen Ersteinzahlungsbonus, während bestehende Kunden eher Boni auf Wetten bekommen. Zu Beachten ist hier auch die Bedingung, die mit dem Bonus verknüpft ist. Achten Sie darauf wie oft Sie Ihren Einsatz umsetzen müssen, ehe Sie auszahlen können. Wichtig ist auch auf die %-Bedingung zu achten. Achten Sie darauf, wie viel % Sie bis zu welcher Einzahlungssumme bekommen. Wir empfehlen die Boni Angebote der Buchmacher regelmäßig zu untersuchen, da sehr viele Boni sich auszahlen.
        </Typography>
        <Typography variant='h5' mt={3}> ACHTEN SIE DARAUF, OB IHRE ZAHLUNGSMÖGLICHKEIT VERFÜGBAR IST</Typography>
        <Typography component="p" mt={1} mb={1}>
        Da Sie auf Ihrem Wettkonto Guthaben zum Wetten haben möchten, müssen Sie auch Geld einzahlen. Zu diesem Zweck stellen Ihnen die Buchmacher verschiedene Einzahlungsmöglichkeiten bereit. Hier sollten Sie überprüfen, ob die Einzahlungsmöglichkeit, die sie nutzen möchten, verfügbar ist. Wir empfehlen Ihnen, sich die Zahlungsmethoden genauer anzusehen, bevor Sie sich registrieren. Wenn Sie nicht selber alles überprüfen möchten, können Sie auch unsere Testberichte zu den verschiedensten Buchmachern lesen. Auch online gibt es eine Menge Informationen über die Buchmacher (Foren und etc.). Viele möchten mit paypal oder paysafecards einzahlen, während Andere eher Ihr Bankkonto nutzen möchten.
            </Typography>
            <Typography component="p" mt={1} mb={1}>
            Ein anderes wichtiges Thema ist die Auszahlung. Erkundigen Sie sich vor der Anmeldung, wie lange es dauert, eine Auszahlung durchzuführen. In der Regel dauert so etwas bei den meisten bis zu vier Tage. Informationen über die Auszahlung finden Sie auf der Homepage des Buchmachers oder bei unseren Testberichten.
                </Typography>
                <Typography component="p" mt={1} mb={1}>
                Die besten Buchmacher verwenden bei Ein- und Auszahlungen sichere Zahlungstechniken. Durch die sichere Technologie garantiert der Buchmacher, dass alles sicher und vertraulich behandelt wird.
                    </Typography>

        <Divider />

        <Typography component={"p"} variant="subtitle2" mt={2}>
        18+ Glücksspiel kann süchtig machen - Hilfe finden Sie auf www.bzga.de und www.gamblingtherapy.org
        </Typography>
        </Container>
    )
}

Bonus.propTypes = {

}

export default Bonus

