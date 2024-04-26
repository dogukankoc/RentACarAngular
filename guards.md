![alt text](/routeGuard.png)

## Angular Guard Nedir


Angular'da bir "guard", belirli bir rotaya erişim iznini kontrol etmek için kullanılan bir mekanizmadır. Bu, kullanıcının belirli bir rotaya erişip erişemeyeceğini belirlemek için kullanılabilir ve bu izin kararını dinamik olarak yapabilir. Bu, kullanıcının giriş durumuna, rollerine veya diğer belirli koşullara bağlı olabilir.

### Route Guards
CanActivate: Belirli bir rotaya erişim iznini kontrol eder.

CanActivateChild: Belirli bir rotanın alt rotalarına erişim iznini kontrol eder.

CanDeactivate: Kullanıcı bir rotadan ayrılmadan önce bir onaylama işlemi gerçekleştirmek için kullanılır.

CanLoad: Belirli bir modülün yüklenip yüklenemeyeceğini kontrol eder.

Resolve Guard: Belirli bir rotanın verilerini yüklemek için kullanılır. Veriler yüklenmeden önce rotaya erişim sağlanmaz.


#### CanActivate
 Bu guard, belirli bir rotaya erişim iznini kontrol eder. Kullanıcı, rotaya yönlendirilmeden önce bu guardın canActivate metodu çağrılır. Bu metod, bir Observable, Promise veya boolean değer döndürmelidir. Eğer Observable veya Promise döndürülüyorsa, rotaya erişim izni Observable tamamlandığında veya Promise çözüldüğünde alınır. Eğer false döndürülürse, kullanıcı rotaya erişemez ve bir yönlendirme gerçekleşmez.

#### CanActivateChild
 Bu guard, belirli bir rotanın alt rotalarına erişim iznini kontrol eder. Kullanıcı, ana rotaya yönlendirilmeden önce bu bekçinin canActivateChild metodu çağrılır. Yine, bir Observable, Promise veya boolean değer döndürmelidir ve aynı şekilde rotaya erişim izni alınır veya alınmaz.

#### CanDeactivate
 Bu guard, kullanıcının bir rotadan ayrılmasına izin verilip verilmeyeceğini kontrol eder. Kullanıcı, rotadan ayrılmadan önce rotadan ayrılma işlemi gerçekleşmeden önce bu guardın canDeactivate metodu çağrılır. Bu metod, rotadan ayrılma işlemine izin vermek için bir Observable, Promise veya boolean değer döndürmelidir.

#### CanLoad
 Bu guard, belirli bir modülün yüklenip yüklenemeyeceğini kontrol eder. Bu, genellikle modüllerin yalnızca belirli koşullar sağlandığında yüklenmesini sağlamak için kullanılır. Kullanıcı, modül yüklenmeden önce bu guardın canLoad metodu çağrılır. Yine, bir Observable, Promise veya boolean değer döndürmelidir ve modülün yüklenmesine izin verilip verilmeyeceği bu değere bağlıdır.

 #### Resolve Guard
 Bu guard, bir rotaya erişilmeden önce belirli bir rotanın modelini veya verilerini almak için kullanılır. Yani, rotanın bileşeni çalıştırılmadan önce rotaya ilişkilendirilmiş verilerin yüklenmesini sağlar. Bu, kullanıcıya daha hızlı ve daha tutarlı bir kullanıcı deneyimi sunmak için kullanılır, çünkü rotanın bileşeni yüklendiğinde veriler hazır olur. Örneğin, kullanıcı profili veya detay sayfaları gibi rotalara giderken ilgili verilerin önceden yüklenmesi için sıklıkla kullanılır.