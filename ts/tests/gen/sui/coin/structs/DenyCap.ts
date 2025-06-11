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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDenyCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::DenyCap` + "<");
}

export interface DenyCapFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
}

export type DenyCapReified<T extends PhantomTypeArgument> = Reified<
  DenyCap<T>,
  DenyCapFields<T>
>;

/**
 * Move struct: `DenyCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class DenyCap<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::DenyCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = DenyCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::DenyCap<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = DenyCap.$isPhantom;

  readonly id: ToField<UID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: DenyCapFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      DenyCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::DenyCap<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): DenyCapReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: DenyCap.$typeName,
      fullTypeName: composeSuiType(
        DenyCap.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::coin::DenyCap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: DenyCap.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        DenyCap.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DenyCap.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => DenyCap.fromBcs(T, data),
      bcs: DenyCap.bcs,
      fromJSONField: (field: any) => DenyCap.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => DenyCap.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DenyCap.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DenyCap.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        DenyCap.fetch(client, T, id),
      new: (fields: DenyCapFields<ToPhantomTypeArgument<T>>) => {
        return new DenyCap([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DenyCap.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<DenyCap<ToPhantomTypeArgument<T>>>> {
    return phantom(DenyCap.reified(T));
  }
  static get p() {
    return DenyCap.phantom;
  }

  static get bcs() {
    return bcs.struct("DenyCap", {
      id: UID.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): DenyCap<ToPhantomTypeArgument<T>> {
    return DenyCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): DenyCap<ToPhantomTypeArgument<T>> {
    if (!isDenyCap(item.type)) {
      throw new Error("not a DenyCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return DenyCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): DenyCap<ToPhantomTypeArgument<T>> {
    return DenyCap.fromFields(typeArg, DenyCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): DenyCap<ToPhantomTypeArgument<T>> {
    return DenyCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): DenyCap<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): DenyCap<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDenyCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DenyCap object`,
      );
    }
    return DenyCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): DenyCap<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDenyCap(data.bcs.type)) {
        throw new Error(`object at is not a DenyCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<DenyCap<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DenyCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDenyCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DenyCap object`);
    }

    return DenyCap.fromSuiObjectData(typeArg, res.data);
  }
}
