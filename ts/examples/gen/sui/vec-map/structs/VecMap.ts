import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { Entry as Entry1 } from "./Entry.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isVecMap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::vec_map::VecMap` + "<");
}

export interface VecMapFields<K extends TypeArgument, V extends TypeArgument> {
  contents: ToField<Vector<Entry1<K, V>>>;
}

export type VecMapReified<
  K extends TypeArgument,
  V extends TypeArgument,
> = Reified<VecMap<K, V>, VecMapFields<K, V>>;

/**
 * Move struct: `VecMap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 */
export class VecMap<K extends TypeArgument, V extends TypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::vec_map::VecMap`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, false] as const;

  readonly $typeName = VecMap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::vec_map::VecMap<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
  readonly $typeArgs: [ToTypeStr<K>, ToTypeStr<V>];
  readonly $isPhantom = VecMap.$isPhantom;

  readonly contents: ToField<Vector<Entry1<K, V>>>;

  private constructor(
    typeArgs: [ToTypeStr<K>, ToTypeStr<V>],
    fields: VecMapFields<K, V>,
  ) {
    this.$fullTypeName = composeSuiType(
      VecMap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::vec_map::VecMap<${ToTypeStr<K>}, ${ToTypeStr<V>}>`;
    this.$typeArgs = typeArgs;

    this.contents = fields.contents;
  }

  static reified<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(K: K, V: V): VecMapReified<ToTypeArgument<K>, ToTypeArgument<V>> {
    return {
      typeName: VecMap.$typeName,
      fullTypeName: composeSuiType(
        VecMap.$typeName,
        ...[extractType(K), extractType(V)],
      ) as `${typeof PKG_V31}::vec_map::VecMap<${ToTypeStr<ToTypeArgument<K>>}, ${ToTypeStr<ToTypeArgument<V>>}>`,
      typeArgs: [extractType(K), extractType(V)] as [
        ToTypeStr<ToTypeArgument<K>>,
        ToTypeStr<ToTypeArgument<V>>,
      ],
      isPhantom: VecMap.$isPhantom,
      reifiedTypeArgs: [K, V],
      fromFields: (fields: Record<string, any>) =>
        VecMap.fromFields([K, V], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        VecMap.fromFieldsWithTypes([K, V], item),
      fromBcs: (data: Uint8Array) => VecMap.fromBcs([K, V], data),
      bcs: VecMap.bcs(toBcs(K), toBcs(V)),
      fromJSONField: (field: any) => VecMap.fromJSONField([K, V], field),
      fromJSON: (json: Record<string, any>) => VecMap.fromJSON([K, V], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        VecMap.fromSuiParsedData([K, V], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        VecMap.fromSuiObjectData([K, V], content),
      fetch: async (client: SuiClient, id: string) =>
        VecMap.fetch(client, [K, V], id),
      new: (fields: VecMapFields<ToTypeArgument<K>, ToTypeArgument<V>>) => {
        return new VecMap([extractType(K), extractType(V)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VecMap.reified;
  }

  static phantom<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    K: K,
    V: V,
  ): PhantomReified<ToTypeStr<VecMap<ToTypeArgument<K>, ToTypeArgument<V>>>> {
    return phantom(VecMap.reified(K, V));
  }
  static get p() {
    return VecMap.phantom;
  }

  static get bcs() {
    return <K extends BcsType<any>, V extends BcsType<any>>(K: K, V: V) =>
      bcs.struct(`VecMap<${K.name}, ${V.name}>`, {
        contents: bcs.vector(Entry1.bcs(K, V)),
      });
  }

  static fromFields<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    fields: Record<string, any>,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return VecMap.reified(typeArg0, typeArg1).new({
      contents: decodeFromFields(
        reified.vector(Entry1.reified(typeArg0, typeArg1)),
        fields.contents,
      ),
    });
  }

  static fromFieldsWithTypes<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    item: FieldsWithTypes,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (!isVecMap(item.type)) {
      throw new Error("not a VecMap type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return VecMap.reified(typeArg0, typeArg1).new({
      contents: decodeFromFieldsWithTypes(
        reified.vector(Entry1.reified(typeArg0, typeArg1)),
        item.fields.contents,
      ),
    });
  }

  static fromBcs<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    data: Uint8Array,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return VecMap.fromFields(
      [typeArg0, typeArg1],
      VecMap.bcs(toBcs(typeArg0), toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      contents: fieldToJSON<Vector<Entry1<K, V>>>(
        `vector<${Entry1.$typeName}<${typeArg0}, ${typeArg1}>>`,
        this.contents,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    field: any,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    const [typeArg0, typeArg1] = typeArgs;
    return VecMap.reified(typeArg0, typeArg1).new({
      contents: decodeFromJSONField(
        reified.vector(Entry1.reified(typeArg0, typeArg1)),
        field.contents,
      ),
    });
  }

  static fromJSON<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    json: Record<string, any>,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (json.$typeName !== VecMap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        VecMap.$typeName,
        ...[typeArg0, typeArg1].map(extractType),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return VecMap.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    content: SuiParsedData,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVecMap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a VecMap object`,
      );
    }
    return VecMap.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    typeArgs: [K, V],
    data: SuiObjectData,
  ): VecMap<ToTypeArgument<K>, ToTypeArgument<V>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isVecMap(data.bcs.type)) {
        throw new Error(`object at is not a VecMap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      gotTypeArgs.forEach((gotTypeArg, i) => {
        const compressedGotType = compressSuiType(gotTypeArg);
        const typeArg = typeArgs[i];
        if (!typeArg) {
          throw new Error(`missing type argument at position ${i}`);
        }
        const expectedTypeArg = compressSuiType(extractType(typeArg));
        if (compressedGotType !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
          );
        }
      });

      return VecMap.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VecMap.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    K extends Reified<TypeArgument, any>,
    V extends Reified<TypeArgument, any>,
  >(
    client: SuiClient,
    typeArgs: [K, V],
    id: string,
  ): Promise<VecMap<ToTypeArgument<K>, ToTypeArgument<V>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching VecMap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isVecMap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a VecMap object`);
    }

    return VecMap.fromSuiObjectData(typeArgs, res.data);
  }
}
