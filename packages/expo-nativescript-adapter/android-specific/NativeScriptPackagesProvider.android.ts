/// <reference path="../typings/java!android-17-core-5.5.1.d.ts" />
import { NativeScriptModuleRegistryProvider } from "./NativeScriptModuleRegistryProvider.android";
import type { NativeScriptPackage } from "./NativeScriptPackage.android";
import type {
    ExportedModule,
    ModuleRegistry,
    ModuleRegistryProvider,
    ViewManager,
    Function,
    InternalModule,
    Package,
    SingletonModule,
    List,
    Collection,
    Context,

    NativeScriptApplicationContext,
    NativeScriptViewManager,
    NativeModule,
    NativeScriptContext,
} from "./nativeTypeAliases.android";

/**
 * Holder for NativeScriptPackages -- visible only to the adapter.
 * <p>
 * We want to be able to create platform-specific unimodules.
 * Thus, we need a way to pass in NativeScriptPackages via unimodules infrastructure.
 * This internal module is populated with NativeScriptPackages by NativeScriptModuleRegistryProvider
 * and is used by ModuleRegistryAdapter when it creates native modules list.
 */
@NativeClass
class NativeScriptPackagesProvider extends org.unimodules.core.interfaces.InternalModule {
    private mNativeScriptPackages: Collection<NativeScriptPackage> = new java.util.ArrayList();
  
    getExportedInterfaces(): List<any> {
        return java.util.Collections.singletonList(NativeScriptPackagesProvider.class);
    }
  
    addPackage(nativeScriptPackage: NativeScriptPackage): void {
        this.mNativeScriptPackages.add(nativeScriptPackage);
    }
  
    getNativeScriptPackages(): Collection<NativeScriptPackage> {
        return this.mNativeScriptPackages;
    }
}
 
export { NativeScriptPackagesProvider };