import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDenyCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::coin::DenyCap` + "<");
}

export interface DenyCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
}

export type DenyCapReified<T0 extends PhantomTypeArgument> = Reified<
  DenyCap<T0>,
  DenyCapFields<T0>
>;

/**
 * Move struct: `DenyCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class DenyCap<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::coin::DenyCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = DenyCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::coin::DenyCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = DenyCap.$isPhantom;

  readonly id: ToField<UID>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: DenyCapFields<T0>) {
    this.$fullTypeName = composeSuiType(
      DenyCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::coin::DenyCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): DenyCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: DenyCap.$typeName,
      fullTypeName: composeSuiType(
        DenyCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::coin::DenyCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: DenyCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => DenyCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => DenyCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => DenyCap.fromBcs(T0, data),
      bcs: DenyCap.bcs,
      fromJSONField: (field: any) => DenyCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => DenyCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => DenyCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => DenyCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => DenyCap.fetch(client, T0, id),
      new: (fields: DenyCapFields<ToPhantomTypeArgument<T0>>) => {
        return new DenyCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DenyCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<DenyCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(DenyCap.reified(T0));
  }
  static get p() {
    return DenyCap.phantom;
  }

  static get bcs() {
    return bcs.struct("DenyCap", {
      id: UID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    return DenyCap.reified(typeArg).new({ id: decodeFromFields(UID.reified(), fields.id) });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    if (!isDenyCap(item.type)) {
      throw new Error("not a DenyCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return DenyCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    return DenyCap.fromFields(typeArg, DenyCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    return DenyCap.reified(typeArg).new({ id: decodeFromJSONField(UID.reified(), field.id) });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== DenyCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(DenyCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return DenyCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDenyCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a DenyCap object`);
    }
    return DenyCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): DenyCap<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDenyCap(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a DenyCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return DenyCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DenyCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<DenyCap<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching DenyCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDenyCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a DenyCap object`);
    }

    return DenyCap.fromSuiObjectData(typeArg, res.data);
  }
}
