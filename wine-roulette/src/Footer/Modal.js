import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Modal.css'

class ScrollDialog extends React.Component {
    state = {
        open: false,
        scroll: 'paper',
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
        <div>
            <Button onClick={this.handleClickOpen('paper')} className="ML"> Mentions Légales </Button>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
            >
            <DialogTitle id="scroll-dialog-title"> Mentions légales </DialogTitle>
            <DialogContent>
                <DialogContentText>
                <p>Merci de lire attentivement les présentes modalités d'utilisation du présent site avant de le 
                parcourir. En vous connectant sur ce site, vous acceptez sans réserve les présentes modalités.
                Editeur du site</p>

                <p>Wine Roulette</p>
                <p>par Thomas, Elise, Philippe, Donovan, Romain, Ben et Camille</p>
                <p>Wild Code School</p>
                <p>75005 Paris</p>
                <p>France</p>
                <p>Tél. : + 33 (0)6 64 79 25 55</p>
                <p>Fax : + 33 (0)5 41 00 02 66</p>
                <p>https://www.wine-roulette.com</p>

                <p>Wine Roulette est une SAS  au capital de 35000€</p>
                <p>RCS B 497 553 71 - Siret : 49755371900020 - APE : 6201Z</p>
                <p>N° déclaration CNIL : 1522193</p>
                <p>Conditions d'utilisation</p>
                <p>Le site accessible par les url suivants : www.wine-roulette.com est exploité dans 
                le respect de la législation française. L'utilisation de ce site est régie par les présentes 
                conditions générales. En utilisant le site, vous reconnaissez avoir pris connaissance de ces 
                conditions et les avoir acceptées. Celles-ci pourront êtres modifiées à tout moment et sans 
                préavis par la société Natural-net.
                Natural-net ne saurait être tenu pour responsable en aucune manière d’une mauvaise utilisation 
                du service.</p>
                
                <p>Limitation de responsabilité</p>
                <p>Les informations contenues sur ce site sont aussi précises que possibles et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des
                lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci 
                de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise
                possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur 
                utilisé, …).</p>

                <p>Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule 
                responsabilité. En conséquence, Natural-net ne saurait être tenu responsable d'un quelconque 
                dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives 
                au téléchargement.  </p> 

                <p>Les photos sont non contractuelles.</p>

                <p>Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres 
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Natural-net.</p>
                <p>Litiges</p>
                <p>Les présentes conditions sont régies par les lois françaises et toute contestation ou litiges qui 
                pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence 
                exclusive des tribunaux dont dépend le siège social de la société Natural-net. La langue de 
                référence, pour le règlement de contentieux éventuels, est le français.</p>
                <p>Déclaration à la CNIL</p>
                <p>Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 
                relative à la protection des personnes physiques à l'égard des traitements de données à 
                caractère personnel) relative à l'informatique, aux fichiers et aux libertés, le site a fait 
                l'objet d'une déclaration auprès de la Commission nationale de l'informatique et des libertés 
                (www.cnil.fr). </p>
                <p>Droit d'accès</p>
                <p>En application de cette loi, les internautes disposent d’un droit d’accès, de rectification, 
                de modification et de suppression concernant les données qui les concernent personnellement. 
                Ce droit peut être exercé par voie postale auprès de Natural-net 49 Boulevard Antoine Gautier 
                33000 Bordeaux ou par voie électronique à l’adresse email suivante : contact@natural-net.fr.
                Les informations personnelles collectées ne sont en aucun cas confiées à des tiers hormis pour 
                l’éventuelle bonne exécution de la prestation commandée par l’internaute.</p>
                <p>Confidentialité</p>
                <p>Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers 
                hormis pour la bonne exécution de la prestation.</p>
                <p>Propriété intellectuelle</p>

                <p>Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, 
                textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la
                propriété exclusive de la société Natural-net à l'exception des marques, logos ou contenus 
                appartenant à d'autres sociétés partenaires ou auteurs.</p>
                <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par 
                écrit de Natural-net. Cette représentation ou reproduction, par quelque procédé que ce soit, 
                constitue une contrefaçon sanctionnée par les articles L.3335-2 et suivants du Code de la 
                propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon 
                pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires 
                des Contenus copiés pourraient intenter une action en justice à votre encontre.</p>

                <p>Natural-net est identiquement propriétaire des "droits des producteurs de bases de données" visés 
                au Livre III, Titre IV, du Code de la Propriété Intellectuelle (loi n° 98-536 du 1er juillet 1998) 
                relative aux droits d'auteur et aux bases de données.</p>

                <p>Les utilisateurs et visiteurs du site internet peuvent mettre en place un hyperlien en direction 
                de ce site, mais uniquement en direction de la page d’accueil, accessible à l’URL suivante : 
                www.site-internet-qualite.fr, à condition que ce lien s’ouvre dans une nouvelle fenêtre. 
                En particulier un lien vers une sous page (« lien profond ») est interdit, ainsi que 
                l’ouverture du présent site au sein d’un cadre (« framing »), sauf l'autorisation expresse 
                et préalable de Natural-net.</p>

                <p>Pour toute demande d'autorisation ou d'information, veuillez nous contacter par email : 
                contact@natural-net.fr. Des conditions spécifiques sont prévues pour la presse.</p>

                <p>Par ailleurs, la mise en forme de ce site a nécessité le recours à des sources externes dont 
                nous avons acquis les droits ou dont les droits d'utilisation sont ouverts : Pioneer - 
                Multi-Purpose HTML 5 / CSS 3 Corporate Template. </p>  
                

                    <p>Créé le : 25/10/2018</p>
                    <p>Auteur : Nous</p>
                    <p>E-mail de l'auteur : nous@gmail.com</p>

                <p>Hébergeur</p>
                <p>Kiubi</p>
                <p>Plateforme de gestion et création de sites internet</p>
                <p>www.kiubi.com</p>
                <p>contact@kiubi.com</p>
                <p>Conditions de service</p>
                <p>Ce site est proposé en langages HTML5 et CSS3, pour un meilleur confort d'utilisation et un 
                graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme 
                Safari, Firefox, Chrome,...</p>
                <p>Informations et exclusion</p>
                <p>Natural-net met en œuvre tous les moyens dont elle dispose, pour assurer une information 
                fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions 
                peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès 
                de Natural-net, et signaler toutes modifications du site qu'il jugerait utile. Natural-net 
                n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice 
                direct ou indirect pouvant en découler.</p>
                <p>Cookies</p>
                <p>Pour des besoins de statistiques et d'affichage, le présent site utilise des cookies. Il s'agit 
                de petits fichiers textes stockés sur votre disque dur afin d'enregistrer des données techniques 
                sur votre navigation. Certaines parties de ce site ne peuvent être fonctionnelle sans 
                l’acceptation de cookies.</p>
                <p>Liens hypertextes</p>
                <p>Les sites internet de Natural-net peuvent offrir des liens vers d’autres sites internet 
                ou d’autres ressources disponibles sur Internet.</p>

                <p>Natural-net ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites 
                internet. Natural-net ne répond pas de la disponibilité de tels sites et sources externes, 
                ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature 
                que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, 
                produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments.
                Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer 
                à leurs conditions d'utilisation.</p>

                <p>Les utilisateurs, les abonnés et les visiteurs des sites internet de Natural-net ne peuvent 
                mettre en place un hyperlien en direction de ce site sans l'autorisation expresse et préalable 
                de Natural-net.</p>

                <p>Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en 
                direction d’un des sites internet de Natural-net, il lui appartiendra d'adresser un email 
                accessible sur le site afin de formuler sa demande de mise en place d'un hyperlien. Natural-net 
                se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.</p>
                <p>Recherche</p>
                <p>En outre, le renvoi sur un site internet pour compléter une information recherchée ne signifie 
                en aucune façon que Natural-net reconnaît ou accepte quelque responsabilité quant à la teneur 
                ou à l'utilisation dudit site.</p>
                <p>Précautions d'usage</p>
                <p>Il vous incombe par conséquent de prendre les précautions d'usage nécessaires pour vous assurer 
                que ce que vous choisissez d'utiliser ne soit pas entaché d'erreurs voire d'éléments de nature 
                destructrice tels que virus, trojans, etc....</p>
                <p>Responsabilité</p>
                <p>Aucune autre garantie n'est accordée au client, auquel incombe l'obligation de formuler 
                clairement ses besoins et le devoir de s'informer. Si des informations fournies par Natural-net 
                apparaissent inexactes, il appartiendra au client de procéder lui-même à toutes vérifications 
                de la cohérence ou de la vraisemblance des résultats obtenus. Natural-net ne sera en aucune 
                façon responsable vis à vis des tiers de l'utilisation par le client des informations ou de 
                leur absence contenues dans ses produits y compris un de ses sites Internet.   </p>
                <p>Contactez-nous</p>
                <p>Natural-net est à votre disposition pour tous vos commentaires ou suggestions. Vous pouvez 
                nous écrire en français par courrier électronique à : contact@natural-net.fr.</p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                OK
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default ScrollDialog;