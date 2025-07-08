"use client";

import BackButton from "@/components/BackButton";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 h-1 bg-blue-600 origin-left w-full z-50"
      />
      <div className="h-[200vh] p-10 bg-gray-100">
        <BackButton />
        <h1 className="text-3xl font-bold pt-5">Scroll para ver a barra</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
          nibh eget diam commodo malesuada id sed eros. Maecenas in tempus
          magna. Quisque id mi nisi. Sed rutrum sem at dignissim sodales.
          Aliquam iaculis augue nec lobortis lobortis. Vestibulum facilisis odio
          eu ante consectetur, vel faucibus lacus imperdiet. Praesent luctus
          massa urna, vel ultricies ante convallis non. Donec placerat hendrerit
          mi, tristique tempus turpis. Donec molestie eros ac efficitur commodo.
          Donec tortor orci, iaculis id elit eu, sollicitudin vehicula purus.
          Duis dignissim dolor eros, ac hendrerit elit pharetra eget. Proin
          efficitur quis dolor in interdum. Nulla ut arcu in enim consectetur
          aliquet imperdiet viverra diam. Donec sit amet ligula sed nisi
          vulputate tristique eu nec ante. Ut accumsan in risus eu sagittis. Ut
          vulputate mauris nec tortor rutrum suscipit. Phasellus eget odio quis
          nibh faucibus porttitor. Vivamus et dignissim tellus, sed tincidunt
          quam. Duis non lectus velit. Curabitur et risus sit amet tellus
          tincidunt sodales. Proin rutrum, lorem ac dapibus egestas, mi leo
          venenatis lorem, quis aliquet enim magna nec mi. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec placerat dapibus est vitae dapibus. Proin tincidunt, ligula quis
          rutrum ultrices, nulla nisl efficitur velit, eu feugiat nibh diam sit
          amet justo. Sed lacinia vel ligula at vehicula. Curabitur ultrices
          magna dictum convallis posuere. Pellentesque euismod rhoncus lorem
          quis dignissim. Etiam sit amet libero bibendum, mattis erat ut,
          vulputate quam. Ut imperdiet libero eu tempus dictum. Etiam facilisis
          porta vestibulum. Pellentesque luctus ultricies sodales. Pellentesque
          volutpat magna a nisi hendrerit, eget finibus tellus ornare. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed justo
          nulla. Duis velit nulla, mattis a condimentum at, sagittis in lectus.
          Duis fringilla, nisl et varius dignissim, sem tellus efficitur purus,
          id consectetur nulla mauris non urna. Ut sagittis pharetra ante vitae
          vulputate. Phasellus gravida, magna quis congue luctus, ligula elit
          viverra nibh, ut pharetra diam tellus eu diam. Nullam ornare risus
          risus, ut accumsan diam elementum vitae. Curabitur accumsan finibus
          turpis, et commodo diam dignissim aliquet. Nunc quis laoreet lorem.
          Vestibulum eget varius dolor. Maecenas feugiat augue a lacus feugiat,
          sit amet accumsan sem dictum. Nunc at lobortis mauris. Donec
          vestibulum dui justo, sed placerat lacus pellentesque bibendum. Mauris
          aliquet, libero ac maximus aliquam, libero nibh fringilla ante, at
          sagittis justo erat quis nulla. Quisque sollicitudin nec velit vel
          suscipit. Nullam hendrerit rutrum dolor eu bibendum. Vivamus
          consectetur ante massa, id suscipit libero feugiat eu. Etiam nulla
          nulla, semper a pellentesque ut, congue vel lacus. Sed facilisis nibh
          eros, commodo volutpat nunc scelerisque sit amet. Praesent interdum
          sollicitudin condimentum. Etiam quis velit eget odio gravida pretium.
          Donec sit amet placerat odio, molestie cursus metus. Etiam sed tortor
          sit amet nulla feugiat mollis ac in urna. Sed dolor mauris, hendrerit
          sit amet malesuada quis, gravida vel lectus. Curabitur vitae semper
          arcu. Maecenas dictum, sapien in pulvinar porttitor, mauris justo
          mollis odio, ac efficitur lectus libero a lacus. Duis sollicitudin ex
          orci, non rutrum mi blandit nec. Sed ac purus sapien. Sed viverra
          sapien vel elit hendrerit semper. Fusce volutpat dignissim sem,
          pharetra hendrerit risus facilisis non. Nulla id lectus bibendum,
          pellentesque nunc a, interdum nisi. Vestibulum id purus rhoncus ex
          eleifend eleifend. Etiam non interdum sapien. Fusce sed sem id enim
          tristique facilisis. Maecenas dignissim ullamcorper enim eget lacinia.
          Nulla ullamcorper ex dui, quis suscipit sapien volutpat convallis. Ut
          quis commodo metus. Pellentesque in felis erat. Proin finibus mi nec
          ligula lacinia, sed egestas sem rutrum. Cras ut dapibus lectus. Donec
          porta condimentum magna, vel aliquet nibh eleifend sed. Suspendisse
          aliquet est enim, quis blandit odio commodo sit amet. Quisque porta,
          elit vitae faucibus dignissim, elit dolor rutrum dolor, et lobortis
          est ipsum ac elit. Duis lobortis lorem eros, vitae hendrerit ligula
          euismod vel. Vivamus fringilla lacinia neque, id finibus arcu aliquet
          faucibus. Donec sit amet felis metus. Integer nisi eros, tempor eget
          lacinia vitae, viverra et velit. Ut commodo placerat metus. Sed
          vehicula interdum gravida. Morbi id ex quis ante ornare imperdiet eu
          vitae nulla. Sed varius, nibh eu mollis rhoncus, nulla ligula
          tincidunt ante, nec bibendum lorem nibh non eros. Donec eu feugiat
          urna. Integer venenatis id dui in condimentum. Nulla non lorem ex.
          Maecenas pellentesque facilisis rhoncus. Fusce porttitor nisi metus,
          vitae feugiat dolor tempor eu. Nulla interdum sollicitudin tempus.
          Cras tortor mi, mollis ac metus quis, scelerisque gravida quam. Mauris
          vel felis laoreet, maximus ligula vel, fermentum lacus. Donec egestas,
          sapien eget sodales blandit, nulla sem elementum libero, eu euismod
          est sapien a enim. Maecenas at est aliquet, tempus sem sit amet,
          tincidunt metus. Sed posuere magna a congue dictum. Vivamus velit
          purus, porttitor a venenatis nec, sodales ac magna. Nam at pretium
          justo. Maecenas vel magna dapibus, interdum est ac, suscipit nibh.
          Nullam orci orci, scelerisque ullamcorper ultricies non, dictum non
          ligula. Suspendisse vel lacus quis ex scelerisque luctus. Nunc vitae
          scelerisque justo. Duis vestibulum porttitor eros, non aliquet lacus
          malesuada eget. Sed lacinia sapien a urna fermentum, sed tempus odio
          viverra. Ut lacinia varius nibh in sollicitudin. Duis nibh dui,
          tincidunt quis hendrerit eu, consectetur porta mi. Integer tincidunt
          sodales viverra. Aliquam posuere risus eget quam pulvinar consequat.
          Mauris in luctus ipsum. Duis ac posuere justo. Curabitur feugiat
          mollis leo, at interdum mi molestie vel. Praesent ornare velit et
          commodo condimentum. Quisque tincidunt tortor pharetra massa sodales,
          eu faucibus lorem efficitur. Proin est ipsum, egestas et justo eget,
          blandit dictum velit. Sed lobortis metus et risus scelerisque, ut
          hendrerit enim cursus. Cras sed pulvinar felis, ac malesuada metus. In
          ante urna, bibendum quis odio quis, malesuada viverra ipsum. Fusce
          luctus egestas risus, quis luctus risus consectetur sed. Suspendisse
          ut imperdiet lorem, at feugiat tellus. Suspendisse potenti. Vivamus
          tincidunt orci sit amet sem vulputate, vitae feugiat elit tempor.
          Vivamus eu iaculis nunc. Morbi euismod felis leo, ac convallis sem
          gravida id. Donec at odio in lorem sollicitudin tincidunt non eu enim.
          Nulla posuere id elit et maximus. Phasellus vitae risus accumsan,
          gravida dolor sed, tempor tellus. Donec sed quam lorem. Nam lacinia
          rhoncus viverra. Donec non porta mauris. Morbi sit amet arcu auctor,
          malesuada tortor eu, efficitur felis. Ut eu ullamcorper justo,
          consectetur dapibus tellus. Nulla ut lectus arcu. Phasellus maximus,
          risus non rhoncus aliquam, purus neque imperdiet ex, in porttitor
          felis neque nec erat. Fusce sed nunc sed ex mollis ornare non eu
          massa. Praesent dignissim lacus sed justo condimentum gravida. Nulla
          eget mi pellentesque diam pellentesque euismod ac et augue. Proin
          placerat ligula vitae neque ullamcorper, et feugiat velit ultricies.
          Morbi efficitur orci ut massa dapibus feugiat. Curabitur sagittis
          gravida ante, in aliquet arcu elementum at. Nullam magna eros,
          pellentesque eget sapien sit amet, porta fermentum arcu. Vestibulum
          mollis eget nunc eu dapibus. Vivamus massa nulla, interdum quis lorem
          eget, tempor accumsan quam. Pellentesque suscipit tortor bibendum,
          mollis magna vel, ultrices ex. Pellentesque blandit, velit ut pretium
          congue, nisl tortor commodo purus, eget ornare neque quam tincidunt
          sem. Integer non lectus sed lectus faucibus aliquam. Mauris viverra
          eleifend libero, quis pretium augue elementum eu. Nullam varius tortor
          at est malesuada commodo. Duis convallis velit mi. Sed laoreet magna
          at efficitur bibendum. Sed dignissim mi id erat porta eleifend. Nunc
          sollicitudin elit sed quam eleifend scelerisque. Mauris tincidunt
          consequat magna non iaculis. Donec non commodo nisl, eu fringilla
          libero. Nam vitae orci eu purus tempor viverra. In hac habitasse
          platea dictumst. Ut viverra magna libero, venenatis ultrices diam
          rutrum non. Vivamus quis ullamcorper quam. Nam nec sollicitudin enim.
          Integer volutpat mattis rhoncus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nulla quis
          rutrum urna, nec ultrices ipsum. Ut aliquam vestibulum semper. Proin
          id ullamcorper neque, non tincidunt massa. Integer iaculis vehicula
          pretium. Suspendisse potenti. In ac consectetur dui, sed mattis nunc.
          Cras et porttitor lacus. Pellentesque posuere risus vitae eleifend
          dictum. Duis id tempus mi. Integer ac ipsum elementum, tincidunt arcu
          quis, dictum purus. Nullam aliquet ante at feugiat bibendum.
          Vestibulum lorem justo, interdum sed sollicitudin euismod, mollis et
          arcu. Nunc tempus aliquet augue. Aliquam lobortis, ex a facilisis
          sagittis, ex nulla elementum orci, in tempus nunc nisi id turpis.
          Quisque blandit, quam a ultrices rhoncus, sapien turpis tristique est,
          et rhoncus augue mi vitae ante. Nunc non urna mattis, euismod massa
          lacinia, iaculis nunc. Praesent lacinia turpis ac sapien vestibulum
          auctor. Vestibulum ut ultricies sapien, sed faucibus est. Aenean
          sapien metus, lobortis in rutrum nec, gravida at nisl. Pellentesque
          imperdiet mollis enim a interdum. Suspendisse ut pulvinar lorem, non
          viverra magna. Sed congue sodales purus vel cursus. Vivamus fermentum
          enim neque, nec dignissim diam cursus eu. Ut porta volutpat tristique.
          Praesent lorem nisl, rhoncus vel finibus at, semper a risus. Fusce
          ultricies suscipit varius. Mauris facilisis purus non diam
          scelerisque, ac mattis ligula sodales. Aenean eget neque rhoncus,
          sagittis est vel, maximus justo. Praesent nec velit massa. Suspendisse
          commodo accumsan nibh eget volutpat. Vivamus tempus tincidunt libero,
          ac maximus augue facilisis a. Donec convallis in mi at luctus.
          Maecenas laoreet risus ac risus tristique, at convallis mi bibendum.
          Nunc orci nisi, eleifend vitae condimentum vitae, mattis in purus.
          Suspendisse vel arcu dolor. Integer rhoncus lectus nec sapien gravida
          dictum. Vivamus scelerisque consectetur consequat. Suspendisse
          sagittis tortor sit amet vehicula convallis. Etiam metus diam,
          venenatis vitae lacus non, tempus venenatis nulla. Sed auctor commodo
          erat, a consectetur arcu dignissim vel. Aenean nec rutrum ex, ac
          varius orci. Vivamus ut quam sed metus blandit faucibus in quis enim.
          Curabitur ex lectus, tristique ut lorem a, gravida pellentesque
          mauris. Aenean fringilla volutpat elit, vitae faucibus nisl hendrerit
          et. Sed consectetur fringilla eros at lacinia. Sed rutrum eget eros at
          pharetra. Vivamus a porta risus. Nulla vitae quam sed urna tristique
          varius ut quis nisl. Maecenas quis vulputate tellus, nec pretium eros.
          Proin lacus ante, rhoncus eget hendrerit et, efficitur eu ligula. Nam
          semper blandit felis. In ultrices odio non laoreet sodales. Praesent
          tristique ligula et quam hendrerit dignissim. Fusce viverra luctus
          tincidunt. Aliquam sit amet libero ut felis laoreet scelerisque.
          Suspendisse sed sodales tellus. Aliquam ultrices euismod nibh, vitae
          laoreet leo dictum sit amet. Aenean fringilla porta nulla in faucibus.
          Proin molestie, leo ut fermentum bibendum, nunc quam facilisis arcu,
          in placerat mauris felis sit amet orci. Integer sem lacus, malesuada
          eu ex nec, laoreet semper enim. Curabitur congue iaculis odio, a
          suscipit dolor imperdiet ac. Donec auctor facilisis cursus. Nam neque
          turpis, ullamcorper non augue ut, imperdiet efficitur justo. Sed id
          convallis magna, dapibus tempus risus. Morbi quis luctus tellus, ut
          tincidunt urna. Donec dapibus purus ullamcorper sem pharetra, vitae
          hendrerit mauris rhoncus. Aenean blandit auctor ipsum, quis sagittis
          sem sagittis cursus. Sed ac nunc ut ipsum consequat porta. Nulla
          interdum, metus a tempor sollicitudin, elit elit vehicula turpis, ut
          iaculis odio quam non felis. Donec dictum luctus vehicula. Nullam
          dignissim placerat vulputate. Nunc semper ex sed odio vulputate
          viverra. Duis tempor tellus eget placerat tempor. Etiam eu augue
          metus. Nunc mauris quam, tempus vel condimentum eget, tempus non
          velit.
        </p>
      </div>
    </>
  );
}
